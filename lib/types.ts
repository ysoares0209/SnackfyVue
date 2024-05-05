export type NotificationType = 'success' | 'info' | 'error';
export type ShowNotificationsProps = {
  message: string;
  type: NotificationType;
  duration?: number;
};
