import { Module } from '@nestjs/common';
import { ContryesService } from './contryes.service';
import { ContryesController } from './contryes.controller';

@Module({
  controllers: [ContryesController],
  providers: [ContryesService]
})
export class ContryesModule {}
