

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
	},

	async 轉_Event1_Act5(runtime, localVars)
	{
		(async()=>{
		  try {
		    if (!window.liff) throw new Error("LIFF SDK 沒載入");
		
		    // 1️⃣ 初始化 LIFF (一定要最先做)
		    await liff.init({ liffId: "YOUR_LIFF_ID" });
		    await liff.ready;
		
		    // 2️⃣ （選用）檢查權限，這裡以 chat_message.write 為例
		    const perm = await liff.permission.query("chat_message.write");
		    console.log("權限狀態:", perm.state);
		
		    // 3️⃣ （選用）自動導向授權
		    if (perm.state !== "granted") {
		      // 引導玩家授權（會重新導回 redirectUri）
		      liff.login({
		        scope: ["openid", "chat_message.write", "profile"],
		        redirectUri: window.location.href
		      });
		    }
		
		    // 4️⃣ （選用）拿玩家資訊
		    const profile = await liff.getProfile();
		    console.log("玩家名稱:", profile.displayName);
		
		  } catch (e) {
		    console.error("LIFF 初始化失敗:", e);
		  }
		})();
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
