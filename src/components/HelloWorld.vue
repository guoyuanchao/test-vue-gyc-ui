<template>
  <div>
    <el-button @click="add" type="danger">新增表单</el-button>
    <g-add-form
      title="新增"
      :is="isshow"
      :objInfo="objInfo"
      @close="isshow = undefined"
      :showFooter="true"
      @saveData="savedata"
      commitText="save"
      cancelText="exit"
      :showCommitBtn="true"
      :showCancelBtn="true"
      :labelWidth="80"
    >
      <!-- <div slot="add-title"></div> -->
      <!-- <div slot="add-footer"></div> -->
      <!-- <div slot="addcompany" slot-scope="scope">{{scope.info.key}}    
      </div> -->
    </g-add-form>
    <g-table @gload="gload" :objInfo="tdata" @edit="del" @del="del">
      <div slot="imgurl">444</div>
    </g-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isshow: undefined,
      objInfo: [
        {
          key: "name",
          title: "姓名",
          val: "刘二麻子",
          required: true,
          width: 210,
          validate: (rule, value, callback) => {
            if (value === "fail") {
              callback(new Error("测试错误！"));
            } else {
              callback();
            }
          },
        },
        { key: "age", title: "年龄", val: "18", number: true, width: 210 },
        { key: "company", title: "公司", val: "", max: 10, width: 210 },
        {
          key: "sex",
          title: "性别",
          val: "",
          dicts: () => [],
          query: (aa, b) => {
            b(
              [
                { label: "男", value: "1" },
                { label: "女", value: "0" },
              ].filter((b) => b.label == aa)
            );
          },
        },
        {
          key: "date",
          title: "日期",
          val: "",
          date: true,
        },
        {
          key: "leval",
          title: "等级",
          val: 3,
          radio: [1, 2, 3],
          labels: ["大", "中", "小"],
        },
        {
          key: "hobby",
          title: "爱好",
          val: ["大"],
          checkbox: [
            "大",
            "中",
            "小",
            "超大",
            "mini",
            "上",
            "apple",
            "mi",
            "oppo",
            "vivo",
          ],
          width: 650,
        },
        { key: "remark", title: "备注", val: "", text: true, width: 650 },
        {
          key: "email",
          title: "邮箱",
          val: "myemail@qq.com",
          email: true,
          required: true,
          width: 650,
        },
        {
          key: "switch",
          title: "开关",
          switch: true,
          val: false,
          trueColor: "yellow",
          falseColor: "blue",
          switchWidth: 100,
        },
      ],
      tdata: [
        { key: "goodstags", title: "goodstags", val: "活动,立减一百,热销" },
        { key: "amount", title: "amount", val: 1000.0 },
        { key: "wareid", title: "wareid", val: 0 },
        { key: "goodsid", title: "goodsid", val: 1044 },
        {
          key: "arrgoodstags",
          tooltip: true,
          title: "arrgoodstags",
          val: '["活动", "立减一百", "热销"]',
        },
        { key: "retailsale", title: "retailsale", val: 965.0 },
        { key: "fl1", title: "fl1", val: 1 },
        {
          key: "goodsname",
          title: "goodsname",
          val: "冷王T1000-1200标准保养（原厂同质配件）",
          tooltip: true,
        },
        {
          key: "remark",
          title: "remark",
          val: "Thermo King 。",
          tooltip: true,
        },
        { key: "fl2", title: "fl2", val: 0 },
        { key: "imgurl", title: "imgurl", val: "mall/00ef4g", tooltip: true },
        { key: "sale", title: "sale", val: 865.0 },
        { key: "amountxs", title: "amountxs", val: 0.0 },
        { key: "statetag", title: "statetag", val: 1, tooltip: true },
        { key: "jbstr", title: "jbstr", val: "" },
      ],
    };
  },
  methods: {
    del(data, callback) {
      callback("删除失败了");
    },
    add() {
      this.isshow = "g-add-form";
    },
    savedata(data) {
      console.log(data);
      this.isshow = undefined;
    },
    async gload(a, b) {
      let url = "http://api.lengyun.co:18070/erp/mallvisitor/goodslist.do";
      let data = await axios.post(url, {
        page: a.page,
        pagesize: a.pagesize,
        fieldlist: "*",
        fl1: 2,
        orderlist: "orderid asc",
      });
      b(data.data.data.list, data.data.data.total);
    },
  },
};
</script>