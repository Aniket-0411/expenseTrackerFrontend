import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Markdown from "react-native-markdown-display";
import ImagePicker from 'react-native-image-crop-picker';
import { Svg, Path } from 'react-native-svg';
import { Buffer } from 'buffer';
import { set } from "date-fns";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export function BotScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [promptText, setPromptText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [clearModalVisible, setClearModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const djangoUrl = process.env.EXPO_PUBLIC_DJANGO_BACKEND;
  const flaskUrl = process.env.EXPO_PUBLIC_FLASK_BACKEND;

  function storeMessage(message: string, sender: string) {
    console.log("Storing message:", message, sender); // Debug message and sender
    fetch(`${djangoUrl}/save_chat_message/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message, sender: sender })
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.error("Error saving message:", response.status, text);
          });
        }
        return response.json();
      })
      .catch(err => console.error(err));
  }

  function fetchChatHistory() {
    console.log("Fetching chat history from", djangoUrl); // Debug URL
    fetch(`${djangoUrl}/get_chat_history/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const transformed = data.map((item: any) => ({
          text: item.message,
          sender: item.sender,
        }));
        console.log("Fetched chat history:", transformed); // Debug fetched data
        setMessages(transformed);
      })
      .catch((error) => console.error("Error fetching chat history:", error));
  }

  function handleRasaResponse(message: string, sender: string) {
    setLoading(true); // Show loading bubble
    fetch(`${djangoUrl}/get_rasa_response/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message, sender: sender })
    })
      .then(response => response.json())
      .then(data => {
        data.responses.forEach((resp: any) => {
          if (resp.text) {
            const botMessage: Message = { text: resp.text, sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            storeMessage(resp.text, "bot");
          }
        });
        setLoading(false); // Hide loading bubble after processing responses
      })
      .catch(error => {
        console.error('Error fetching Rasa response:', error);
        setLoading(false); // Hide loading bubble on error
      });
  }

  function sendMessage() {
    if (promptText.trim() === "") return;
    const newMessage: Message = {
      text: promptText,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    storeMessage(promptText, "user");
    setPromptText("");
    handleRasaResponse(promptText, "user"); // Call Rasa's endpoint to get the bot's response
  }

  function clearChatHistory() {
    // new function to clear chat history
    fetch(`${djangoUrl}/clear_chat_history/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(data => {
        if (data.status === "success") {
          setMessages([]); // Clear messages in the UI
          console.log("Chat history cleared successfully.");
        }
      })
      .catch((error) => console.error("Error clearing chat history:", error));
  }
  

  // Updated selectImage to include base64 data:
  function selectImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true, // added to get base64 data
    }).then(image => {
      setSelectedImage(image);
    }).catch(error => {
      if (error.code === 'E_PICKER_CANCELLED') {
        console.log('Image selection cancelled.');
      } else {
        console.error("Image selection error:", error);
      }
    });
  }

  // Updated uploadImage to show a loading indicator while waiting for the flask response:
  function uploadImage() {
    if (!selectedImage) {
      console.warn('No image selected');
      return;
    }
    setLoading(true); // Show loading indicator
    // Convert the base64 string to binary (an array of bytes)
    const binaryData = Buffer.from(selectedImage.data, 'base64');
    // Convert binary to an array of numbers
    const byteArray = Array.from(binaryData);
    const payload = { 'image': byteArray };
    fetch(`${flaskUrl}/accept_image/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(result => {
      console.log('Image upload response:', result.responses);
      setSelectedImage(null); // Clear selected image after upload
      result.responses.forEach((resp: any) => {
        if (resp.text) {
          const botMessage: Message = { text: resp.text, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage]);
          storeMessage(resp.text, 'bot');
        }
      });
      setLoading(false); // Hide loading indicator
    })
    .catch(error => {
      console.error("Image upload error:", error);
      setLoading(false); // Hide loading indicator on error
    });
  }

  useEffect(() => {
    fetchChatHistory();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Text style={styles.title}>Finance Advisory Bot</Text>
        {/* display messages */}
        <View style={[styles.chatBox, { position: "relative" }]}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
          >
            {messages.map((msg, index) => (
              <View
                key={index} // using index as key
                style={[
                  styles.messageBubble,
                  msg.sender === "user" ? styles.userBubble : styles.botBubble,
                ]}
              >
                {msg.sender === "bot" ? (
                  <Markdown style={markdownStyles}>{msg.text}</Markdown>
                ) : (
                  <Text style={styles.messageText}>{msg.text}</Text>
                )}
              </View>
            ))}
          </ScrollView>
          {loading && (
            <ActivityIndicator style={styles.inlineIndicator} size="small" color="#000" />
          )}
        </View>
        {/* send message input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter your prompt..."
            value={promptText}
            onChangeText={setPromptText}
            onSubmitEditing={sendMessage} // added onSubmitEditing to send message
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}> {/* added onPress */}
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        {/* clear chats, select image, and upload image buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.clearButton} onPress={() => setClearModalVisible(true)}>
            <Text style={styles.buttonText}>Clear Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, { marginLeft: 10 }]} onPress={selectImage}>
            <Svg width={24} height={24} viewBox="0 0 24 24">
              <Path d="M21 19V5H3v14h18zM3 3h18c1.1 0 2 .9 2 2v14c0 1.11-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm9 12l5-5-1.41-1.41L12 12.17 9.41 9.59 8 11l5 5z" fill="#fff"/>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, { marginLeft: 10 }]} onPress={uploadImage}>
            <Svg width={24} height={24} viewBox="0 0 24 24">
              <Path d="M19 15v4H5v-4H3v4c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-2zm-7-9l-5 5h3v4h4v-4h3l-5-5z" fill="#fff"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      {clearModalVisible && (
        <Modal transparent animationType="fade" visible={clearModalVisible}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Are you sure you want to clear the chat?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setClearModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    clearChatHistory();
                    setClearModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  chatContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  chatBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
    alignSelf: "flex-start",
    borderWidth: 0.3,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  userBubble: {
    backgroundColor: "#d1e7dd",
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#e2e3e5",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#374151",
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  clearButton: {
    backgroundColor: "#dc2626",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconButton: {
    backgroundColor: "#1E90FF", // changed color for select and upload image buttons
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#374151",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  inlineIndicator: {
    marginVertical: 10,
    alignSelf: "center",
  },
});

// Updated markdownStyles - cast as any to accept percentage values
const markdownStyles: any = {
  text: {
    fontSize: 16,
  },
  body: {
    width: "100%",
  },
  bullet_list: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: 20,
  },
  list_item: {
    width: "100%",
    marginLeft: 0,
  },
};
