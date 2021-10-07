export interface Logger {
  debug(...params: any[]): void;
  info(...params: any[]): void;
  error(...params: any[]): void;
  log(...params: any[]): void;
}