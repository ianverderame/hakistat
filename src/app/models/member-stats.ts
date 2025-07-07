// src/app/models/member-stats.ts
import { Member } from './member';
import { Alignment } from './alignment';
import { CrashOut } from './crash-out';
import { HairLength } from './hair-length';
import { RollerBrain } from './roller-brain';

export interface MemberStats {
  member: Member;

  alignment?: Alignment;
  crashout?: CrashOut;
  hairLength?: HairLength;
  rollerBrain?: RollerBrain;
}
