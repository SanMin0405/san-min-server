import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {

    //constructor 안에 privat를 써주면 암묵적으로 클래스 프러퍼티를 만들어준다.
    boardsService: BoardsService;
    constructor( boardsService: BoardsService) {}

    @Get()
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }
    
    @Post()
    createBoard() {
        return this.boardsService.createBoard('F&Q', 'F&Q board');
    }
    
    @Get('/:id')
    getBoard() {
        return 'This will return one board';
    }
    
    @Delete('/:id')
    deleteBoard() {
        return 'This will delete a board';
    }
    
    @Put('/:id')
    updateBoard() {
        return 'This will update a board';
    }
}


