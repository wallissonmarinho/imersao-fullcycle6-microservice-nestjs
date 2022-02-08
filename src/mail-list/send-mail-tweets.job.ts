import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) {}

  @Process()
  async handle(job: Job) {
    const mailLIst = await this.mailListService.findOne();
    console.log(mailLIst.emails);
    console.log('SendMailTweets');
  }
}
