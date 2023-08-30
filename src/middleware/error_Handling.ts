import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor() {
    super("Nazarda tutilmagan hatolik", HttpStatus.FORBIDDEN);
  }
}
