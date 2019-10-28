<template>
<a-spin tip="Loading..." :spinning="loading">
  <a-card>
    <template v-slot:title><a-icon type="user" /> 基本信息</template>
    <a-row :gutter="32">
      <a-col :span="16">
        <a-form :layout="vertical">
          <a-form-item
            label="昵 称"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="给自己起个名字吧" />
          </a-form-item>
          <a-form-item
            label="个人说明"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="这家伙很懒，什么都没留下" />
          </a-form-item>
          <a-form-item
            label="电子邮箱"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="example@xx.com" />
          </a-form-item>
          <a-form-item
            label="账 号"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="Essentric" />
          </a-form-item>
          <a-form-item
            label="密 码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input-password placeholder="input password" />
          </a-form-item>
          <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button type="primary">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="8">
        <a-upload
          name="avatar"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <!-- <div class="ant-upload-text">Upload</div> -->
          </div>
        </a-upload>
      </a-col>
    </a-row>
  </a-card>
</a-spin>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: 'Personal',
  data() {
    return {
      imageUrl: '',
      loading: true,
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 },
        }
        : {};
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
  .avatar-uploader > .ant-upload {
    width: 180px;
    height: 180px;
    margin: 40px auto;
    border-radius: 50%;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .ant-upload-btn {
    display: table-cell;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
  }
</style>
