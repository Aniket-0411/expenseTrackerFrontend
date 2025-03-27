import Reactotron, {networking} from 'reactotron-react-native';


const initializeReactotron = () => {
  try {
    Reactotron.configure({
      name: 'Expense Tracker',
      host: '192.168.1.75',
      onConnect: () => {
        Reactotron.clear();
      },
    })
    .useReactNative({
      networking: {
        ignoreUrls: /symbolicate/,
      },
    })
    .connect();
  } catch (error) {
    console.error('Failed to initialize Reactotron', error);
  }
}
