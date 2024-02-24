import { CanActivate } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context) {
    const request = context.switchToHttp().getRequest();
    console.log(request.currentUser);

    if (!request.currentUser) {
      return false;
    }

    return request.currentUser.isAdmin;
  }
}
