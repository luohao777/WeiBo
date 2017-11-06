export const time = (createTime) => {
  let now = new Date()
  let create = new Date(createTime)
  let margin = (now.getTime() - create.getTime()) / 1000
  if (margin < 60) {
    return parseInt(margin) + "秒前"
  } else {
    let marginMin = margin / 60
    if (marginMin < 60) {
      return parseInt(marginMin) + "分钟前"
    } else {
      let marginHours = marginMin / 60
      if (marginHours < 24) {
        return parseInt(marginHours) + "小时前"
      } else {
        let marginDays = marginHours / 24
        // if(marginDays < 7){
          return parseInt(marginDays) + "天前"
        // }
      }
    }
  }
}

