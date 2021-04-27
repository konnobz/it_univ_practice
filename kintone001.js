//新規レコードでは表示されない　'文字列', false
//レコード保存後は表示され、編集できる文字列
(function () {
    "use strict";//javascriptのエラーチェック
    //具体的な処理を記述する
    kintone.events.on('app.record.create.show', function (event) {
        kintone.app.record.setFieldShown('文字列', false); //フィールドコート、非表示でfalse
        //return event; は、「eventオブジェクトにreturnした場合」という説明が無ければ、不要

    })
})();