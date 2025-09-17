

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
		if (window.liff && liff.isInClient()) {
		  liff.closeWindow();
		}
		
	},

	async 轉_Event2_Act3(runtime, localVars)
	{
		(async () => {
		  try {
		    if (!window.liff) throw new Error('LIFF SDK 沒載入');
		
		    // 初始化 LIFF
		    await liff.init({ liffId: '2008129352-znYAkn2O' });
		    await liff.ready;
		
		    console.log('✅ LIFF 初始化完成');
		  } catch (e) {
		    console.error('❌ LIFF 初始化失敗:', e);
		  }
		})();
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
