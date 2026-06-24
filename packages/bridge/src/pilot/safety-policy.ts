export interface PilotSafetyCap {
  maxDailyVolume: string;
  maxPerTransaction: string;
  isPaused: boolean;
}

export const PILOT_POLICY: PilotSafetyCap = {
  maxDailyVolume: '10000',
  maxPerTransaction: '1000',
  isPaused: true
};
