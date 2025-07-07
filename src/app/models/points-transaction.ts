export interface PointsTransaction {
  id: string;
  memberId: string;
  amount: number;
  reason: string;
  source: 'discord'; // locked to "discord"
  createdBy: string; // Discord user ID of the person who gave the points
  timestamp: Date;
}
