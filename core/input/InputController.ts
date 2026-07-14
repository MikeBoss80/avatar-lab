import { AvatarController } from "@/core/avatar/AvatarController";

export class InputController {
  constructor(
    private readonly avatar: AvatarController
  ) {}

  public handleKeyDown(key: string): void {
    switch (key.toLowerCase()) {
      case "1":
        this.avatar.idle();
        break;

      case "2":
        this.avatar.Breathing();
        break;

      case "3":
        this.avatar.walk();
        break;

      case "4":
        this.avatar.pistolAim();
        break;

      case "5":
        this.avatar.pistolRun();
        break;

      case "6":
        this.avatar.shoot();
        break;

      case "7":
        this.avatar.talk();
        break;

      case "8":
        this.avatar.talkWhileWalking();
        break;
    }
  }
}