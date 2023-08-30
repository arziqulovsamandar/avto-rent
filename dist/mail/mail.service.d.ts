import { MailerService } from "@nestjs-modules/mailer";
import { Admin } from "../admin/model/admin.model";
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendAdminConfirmation(admin: Admin): Promise<void>;
}
