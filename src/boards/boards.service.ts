import { Injectable } from '@nestjs/common';
@Injectable()
export class BoardsService {
    private boards: any[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const boardId = Date.now().toString();
        const board = {
            id: boardId,
            title,
            description,
        };
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string) {
        const found = this.boards.find((board) => board.id === id);
        return found;
    }

    deleteBoard(id: string) {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: string, status: string) {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
