import { addDays, isToday, isYesterday, format, subDays, parse } from 'date-fns';
import * as allLocale from 'date-fns/locale';

import { TLocale } from '../types';

export type TimeRangeType = 'TODAY' | 'YESTERDAY' | 'EARLIER';

export const getDateLabel = (date: number): TimeRangeType => {
  if (isToday(date)) {
    return 'TODAY';
  }

  if (isYesterday(date)) {
    return 'TODAY';
  }

  return 'EARLIER';
};

interface IGetHumanReadableTimeStampProps {
  timestamp: number;
  activeLocale?: TLocale;
  dateFormat?: string;
  showExactDate?: boolean;
}

/**
 * This function accepts timestamp and returns human readable time stamp according
 * to the difference between current time and given timestamp.
 */
export const getHumanReadableTimeStamp = ({
  activeLocale = 'en',
  dateFormat,
  showExactDate = false,
  timestamp,
}: IGetHumanReadableTimeStampProps): string => {
  const isDateInDaysAgoFormat = true;
  const locale = activeLocale === 'en' ? allLocale.enUS : allLocale[activeLocale];
  const dateOptions = { locale };

  const now = Date.now();
  const differenceInMins = Math.round((now - timestamp) / 60000);

  if (differenceInMins < 1) {
    const differenceInSec = Math.round((now - timestamp) / 1000);

    if (activeLocale === 'en') {
      return `${differenceInSec} second${differenceInSec > 1 ? 's' : ''} ago`;
    }

    if (differenceInSec === 1) {
      return 'منذ ثانية واحدة';
    }

    return `منذ ${differenceInSec} ثانية`;
  }

  if (differenceInMins < 60) {
    if (activeLocale === 'en') {
      return `${differenceInMins} minute${differenceInMins > 1 ? 's' : ''} ago`;
    }

    if (differenceInMins === 1) {
      return 'منذ 1 دقيقة';
    }

    return `منذ ${differenceInMins} دقيقة`;
  }

  if (differenceInMins < 360) {
    const differenceInHours = Math.round(differenceInMins / 60);

    if (activeLocale === 'en') {
      return `${differenceInHours} hour${differenceInHours > 1 ? 's' : ''} ago`;
    }

    if (differenceInHours === 1) {
      return 'منذ 1 ساعة';
    }

    return `منذ ${differenceInHours} دقيقة`;
  }

  if (differenceInMins < 1440 && isToday(timestamp)) {
    if (activeLocale === 'en') {
      return `Today, ${format(timestamp, 'h:mm a', dateOptions)}`;
    }

    return `${format(timestamp, 'h:mm aaa', dateOptions)} اليوم،`;
  }

  if (isYesterday(timestamp)) {
    if (activeLocale === 'en') {
      return `Yesterday, ${format(timestamp, 'h:mm a', dateOptions)}`;
    }

    return `${format(timestamp, 'h:mm aaa', dateOptions)} أمس`;
  }

  // if (differenceInMins < 10080) {
  //   const formattedDate = format(timestamp, 'EEE, h:mm aaa', dateOptions);

  //   return formattedDate;
  // }

  if (differenceInMins < 525600 && isDateInDaysAgoFormat) {
    /**
     * if `showExactDate` flag is true then return the exact date
     */
    if (showExactDate) {
      return format(timestamp, 'd MMM yyyy, h:mm a', dateOptions);
    }
    const differenceInDays = Math.round(differenceInMins / 1440);
    if (activeLocale === 'en') {
      return `${differenceInDays} day${differenceInDays > 1 ? 's' : ''} ago`;
    }

    return `منذ ${differenceInDays} أيام`;
  }

  const formattedDate = format(timestamp, dateFormat ?? 'd MMM yyyy', dateOptions);

  return formattedDate;
};

/**
 * This function converts Date to formatted string eg: "2022/12/13"
 *
 * @param date
 * @returns string
 */
export const getFormattedDate = (date: Date, formatString?: string): string =>
  format(date, formatString || 'yyyy-MM-dd');

/**
 * This function substract current date with given days count
 *
 * @param days
 * @returns string
 */
export const getSubDate = (days: number): string => {
  if (days === 0) return '';

  const subDate = subDays(new Date(), days);

  return getFormattedDate(subDate);
};

/**
 * Gets a human readable relative date from the timestamp.
 *
 * @param date number - The date in milliseconds
 * @returns string - The human relative date.
 */
export const convertToHumanReadableTimestamp = (date?: number) => {
  let timestamp = '';

  if (date) {
    timestamp = getHumanReadableTimeStamp({
      timestamp: date,
    });
  }

  return timestamp;
};

/**
 * Gets the current time zone of the user in "Region/City" format.
 *
 * @returns string
 */
export const getUserTimeZone = () => {
  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const regionName = timezoneName.split('/')[0];
  const cityNames = timezoneName.split('/')[1].split('_').join(' ');
  const timezoneFormattedName = `${regionName}/${cityNames}`;

  return timezoneFormattedName;
};

/**
 * Utility function to add a specified number of days (default: 365) to a date
 * @param dateString - The input date as a string in the specified input format
 * @param inputFormat - The format of the input date string (e.g., 'yyyy-MM-dd')
 * @param outputFormat - The desired output format for the resulting date (e.g., 'yyyy-MM-dd')
 * @param daysToAdd - Number of days to add to the input date (default is 365 days)
 * @returns The resulting date as a string in the desired format, or an empty
 *  string if the input date is invalid
 */
export const addDaysToDate = (
  dateString: string,
  inputFormat = 'yyyy-MM-dd',
  outputFormat = 'yyyy-MM-dd',
  daysToAdd = 365,
): string => {
  try {
    // Parse the input date based on the provided input format
    const parsedDate = parse(dateString, inputFormat, new Date());

    // Add the specified number of days
    const newDate = addDays(parsedDate, daysToAdd);

    // Format the new date based on the provided output format
    return format(newDate, outputFormat);
  } catch (error) {
    console.error('Error parsing or formatting the date:', error);
    return '';
  }
};

export { isToday, isYesterday, format };
