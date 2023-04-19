import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}

// cli 보더 폴더 찾기 > 보더 폴더 안에 컨트롤러 생성 > 보더 폴더 안에 모듈 파일 찾기 > 모듈 파일안에다가 컨트롤러 넣어주기

// borad service 생성
