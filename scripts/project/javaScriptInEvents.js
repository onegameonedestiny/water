

const scriptsInEvents = {

	async 轉_Event4_Act1(runtime, localVars)
	{
		if (window.liffReady && window.liff.isInClient()) {
		  window.liff.closeWindow();
		} else {
		  alert("非 LINE App 環境，無法關閉視窗");
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
