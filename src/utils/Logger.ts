export class Logger {
  static log = (args: object | string) => this.info(args);

  static info = (args: object | string) => {
    // eslint-disable-next-line no-console
    console.log(`[${new Date().toLocaleString()}] [INFO]`, args);
  };

  static warning = (args: object | string) => {
    // eslint-disable-next-line no-console
    console.warn(`[${new Date().toLocaleString()}] [WARN]`, args);
  };

  static error = (args: object | string) => {
    // eslint-disable-next-line no-console
    console.error(`[${new Date().toLocaleString()}] [ERROR]`, args);
  };
}
