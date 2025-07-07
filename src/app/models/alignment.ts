import { AlignmentValue } from './alignment-value.enum';

export interface Alignment {
  id: string;
  memberId: string;
  alignment: AlignmentValue;
  timestamp: Date;
}
