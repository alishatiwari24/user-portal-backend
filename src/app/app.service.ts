import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health() {
    return { data: 'pong' };
  }
}
