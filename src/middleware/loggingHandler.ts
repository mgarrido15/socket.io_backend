import { Request, Response, NextFunction } from 'express';

export function loggingHandler(req: Request, res: Response, next: NextFunction) {
    console.log(`Incoming - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Body: ${JSON.stringify(req.body)}`);

    res.on('finish', () => {
        console.log(`Outgoing - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
    });

    next();
}