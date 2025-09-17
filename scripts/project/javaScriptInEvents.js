

const scriptsInEvents = {

	async 事件表1_Event1_Act1(runtime, localVars)
	{
		(async()=>{
		  try{
		    if(!window.liff) throw new Error('LIFF SDK 未載入');
		    await liff.init({ liffId: 'YOUR_LIFF_ID' });
		    await liff.ready;
		
		    // ⬇️ 第一步：傳送訊息（以使用者本人身分發到聊天室）
		    await liff.sendMessages([
		      { type:'text', text:'成功' }
		    ]);
		
		    // ⬇️ 第二步：傳送成功後，關閉 LIFF 視窗
		    if(liff.isInClient()) liff.closeWindow();
		  }catch(e){
		    console.error('sendMessages 失敗:', e);
		  }
		})();
		
	},

	async 轉_Event17_Act1(runtime, localVars)
	{
		(async()=>{
		  try{
		    if(!window.liff) throw new Error('LIFF SDK 未載入');
		    await liff.init({ liffId: 'YOUR_LIFF_ID' });
		    await liff.ready;
		    await liff.sendMessages([{ type:'text', text:'成功' }]);
		    if(liff.isInClient()) liff.closeWindow();
		  }catch(e){
		    console.error('sendMessages 失敗:', e);
		    // alert('送訊息失敗：' + (e.message||e));  // 需要時可打開提示
		  }
		})();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
