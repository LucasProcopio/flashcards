import { DECK_STORAGE_KEY, initialData, NOTIFICATION_KEY } from "./_initalData";
import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

export async function insertData(data) {
  try {
    return await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.log("MERGE DATA ERROR", e);
  }
}

export async function setInitialData() {
  try {
    await AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(initialData)
    ).then(data => data);
  } catch (e) {
    console.log("INITIAL DATA ERROR", e);
  }
}

export async function fetchDecks() {
  try {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY);
  } catch (e) {
    console.log("GET ITEM STORAGE: ", e);
  }
}

/**
 * Cancel all scheduled notifications
 */
export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

/**
 * Notification message
 */
function newNotification() {
  return {
    title: "Its Quiz Time!",
    body: "👋 don't forget to take your quiz today :) practice makes perfection"
  };
}

/**
 * Set new notification
 */
export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            const notificationDate = new Date();
            notificationDate.setDate(notificationDate.getDate() + 1);
            notificationDate.setHours(17);
            notificationDate.setMinutes(30);
            Notifications.scheduleLocalNotificationAsync(newNotification(), {
              time: notificationDate,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
