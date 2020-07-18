import ENV from 'hack-admin/config/environment';
import FileField from 'ember-uploader/components/file-field';
import S3Uploader from 'ember-uploader/uploaders/s3';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class FormS3FileInputComponent extends FileField {
  @service session;

  signingUrl = ENV.apiHost + '/api/v2/aws/pre_signed_post';

  filesDidChange(files) {
    const jwt = this.get('session.data.authenticated.jwt');
    const uploader = S3Uploader.create({
      signingUrl: this.signingUrl,
      signingAjaxSettings: {
        headers: {
          'Authorization': `JWT ${jwt}`
        }
      },
      didSign(response) {
        this.trigger('didSign', response)
        return response.preSignedUrl
      }
    });

    uploader.on('didUpload', e => {
      console.log(e)
      if (this.onAfterUpload) {
        this.onAfterUpload(e)
      }
    })

    uploader.on('didSign', e => {
      console.log(e)
      if (this.onAfterSign) {
        this.onAfterSign(e)
      }
    })

    uploader.on('progress', e => {
      if (this.onProgress) {
        this.onProgress(e)
      }
    })

    uploader.on('didError', e => {
      if (this.onError) {
        this.onError(e)
      }
    })

    if (!isEmpty(files)) {
      uploader.upload(files[0])
    }
  }
}
