export class BridgeEmergencyState {
  private isPaused: boolean = false;

  pause() { this.isPaused = true; }
  resume() { this.isPaused = false; }
  
  checkOperational(): boolean {
    return !this.isPaused;
  }
}
