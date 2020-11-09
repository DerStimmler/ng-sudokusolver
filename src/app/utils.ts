export class Utils {
  static delay(ms: number): void {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
