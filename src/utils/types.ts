export type RequestUser = {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    mobileNumber: string;
    tenantId: string;
    tenantName: string;
    profilePicture?: string;
  };
};

export type MoveStudentsPayload = {
  studentIds: string[];
  toClassId: string;
};

export interface notificationPayload {
  id: string;
  endpoint: string;
  keys: {
    auth: string;
    p256dh: string;
  };
}
