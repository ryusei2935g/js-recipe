// Vue
new Vue({
  el: "#app1",
  data: {
    nyuryokugaku: "",
    zandaka: 0,
    logs: [],
  },

  methods: {
    /*入金押したら*/
    nyukin: function() {
      /*残高に入力額足してね*/
      this.zandaka += Number(this.nyuryokugaku)
      /*以下の取引記録を表示してね*/
      const now = new Date() //new演算子でオブジェクトのインスタンスを生成
      this.logs.push(`日付:${now}`)
      this.logs.push("操作:入金")
      this.logs.push(`金額:${Number(this.nyuryokugaku)}`)
    },
    syukkin: function() {
      /*入力額が残高を上回ると出金できなくするために場合分け*/
      if (this.nyuryokugaku <= this.zandaka)
        this.zandaka -= Number(this.nyuryokugaku)
      const now = new Date()
      this.logs.push(`日付:${now}`)
      this.logs.push("操作:出金")
      this.logs.push(`金額:${Number(this.nyuryokugaku)}`)
    },
  },
})
