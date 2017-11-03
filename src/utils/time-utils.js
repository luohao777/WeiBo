export const time = (createTime) => {
      let now = new Date();
      let create = new Date(createTime);
      let differ = (now.getTime() - create.getTime()) / 1000;
      if (differ < 60) {
        return parseInt(differ) + "秒前";
      } else {
        let differMin = differ / 60;
        if (differMin < 60) {
          return parseInt(differMin) + "分钟前";
        } else {
          let differHours = differMin / 60;
          return parseInt(differHours) + "小时前";
        }
      }
    }

