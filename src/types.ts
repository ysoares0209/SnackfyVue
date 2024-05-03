export type NotificationType = 'success' | 'error';
export type ShowNotificationsProps = {
  message: string;
  type: NotificationType;
  duration?: number;
};
