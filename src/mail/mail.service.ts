import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { Admin } from "../admin/model/admin.model";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendAdminConfirmation(admin: Admin) {
      try {
          console.log(2);

          const url = `${process.env.API_HOST}/api/admin/activate/${admin.activation_link}`;
          console.log(url);
          console.log(admin.email, admin.first_name);
          
          await this.mailerService.sendMail({

              to: admin.email,
              subject:
                  "Welcome to Cleaning Service as Admin! Confirm your Email",
              template: "./confirmation",
              context: {
                  name: admin.first_name,
                  url,
              },

          });
          console.log(3,url);

      } catch (error) {
          console.log(error);
      }
  }

}
