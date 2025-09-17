

const scriptsInEvents = {

	async 轉_Event8_Act1(runtime, localVars)
	{
		if (window.liff) {
		  liff.sendMessages([
		    { type: 'text', text: String(runtime.globalVars.密碼 || '') }
		  ])
		  .then(()=>{
		    if (liff.isInClient()) {
		      liff.closeWindow();   // 傳送成功後自動關閉 LIFF 視窗
		    }
		  })
		  .catch(console.error);
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
