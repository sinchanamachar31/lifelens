// ==================== NAVIGATION FUNCTIONS ====================

function showLogin() {
  console.log("showLogin called");
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function backToWelcome() {
  console.log("backToWelcome called");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("welcome").classList.remove("hidden");
  document.getElementById("phone").value = '';
  document.getElementById("otp").value = '';
  document.getElementById("otpSection").classList.add("hidden");
}

function enterApp() {
  console.log("enterApp called");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function logout() {
  console.log("logout called");
  document.getElementById("app").classList.add("hidden");
  document.getElementById("welcome").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("sleep").checked = false;
  document.getElementById("water").checked = false;
  document.getElementById("exercise").checked = false;
  document.getElementById("junk").checked = false;
  document.getElementById("screen").checked = false;
  alert("✅ Logged out successfully");
}

// ==================== AUTHENTICATION FUNCTIONS ====================

function googleLogin() {
  console.log("googleLogin called");
  alert("🔐 Google login initiated. Welcome!");
  enterApp();
}

function sendOTP() {
  console.log("sendOTP called");
  const phoneNumber = document.getElementById("phone").value;
  
  if (!phoneNumber) {
    alert("❌ Please enter a phone number");
    return;
  }

  if (phoneNumber.length < 10) {
    alert("❌ Please enter a valid phone number (at least 10 digits)");
    return;
  }

  console.log("OTP sent to:", phoneNumber);
  document.getElementById("otpSection").classList.remove("hidden");
  alert("✅ OTP sent to " + phoneNumber + "\n(Demo: Use any 6 digits)");
}

function verifyOTP() {
  console.log("verifyOTP called");
  const code = document.getElementById("otp").value;
  
  if (!code) {
    alert("❌ Please enter OTP");
    return;
  }

  if (code.length !== 6) {
    alert("❌ OTP must be 6 digits");
    return;
  }

  console.log("OTP verified:", code);
  alert("✅ Login successful!");
  enterApp();
}

// ==================== HEALTH ANALYSIS ====================

function analyze() {
  console.log("analyze called");
  let score = 0;

  let sleep = document.getElementById("sleep").checked;
  let water = document.getElementById("water").checked;
  let exercise = document.getElementById("exercise").checked;
  let junk = document.getElementById("junk").checked;
  let screen = document.getElementById("screen").checked;

  // Risk scoring
  if (sleep) score += 25;
  if (water) score += 20;
  if (exercise) score += 25;
  if (junk) score += 15;
  if (screen) score += 15;

  // Status
  let status = "";
  if (score <= 30) status = "✅ Healthy - Great Job! Keep it up!";
  else if (score <= 60) status = "⚠️ Moderate - Room for Improvement";
  else status = "🚨 High Risk - Action Needed!";

  // Insight
  let insight = "Your lifestyle habits shape your health. Small changes can make a big difference!";

  if (sleep && screen) {
    insight = "📱 Screen usage may be affecting your sleep. Try reducing screen time before bed.";
  } else if (water && junk) {
    insight = "💧 Poor hydration combined with junk food. Focus on drinking more water and eating healthier.";
  } else if (exercise && junk) {
    insight = "🏃 Not enough exercise combined with poor diet. Start a workout routine and eat balanced meals.";
  } else if (sleep && exercise) {
    insight = "😴 Sleep and exercise are connected. Improve your sleep schedule and daily activity.";
  } else if (water) {
    insight = "💧 Increase your water intake. Aim for 8-10 glasses daily for better health.";
  } else if (junk) {
    insight = "🍔 Reduce junk food intake. Focus on whole foods - fruits, vegetables, and proteins.";
  } else if (screen) {
    insight = "📱 Reduce screen time - it impacts sleep and overall health.";
  } else if (exercise) {
    insight = "🏃 Keep up with your exercise routine! It's great for your health.";
  } else if (sleep) {
    insight = "😴 Work on improving your sleep quality for better health.";
  }

  // Eco tip
  let eco = "🌍 Eco Tip: Use reusable water bottles and containers to reduce waste while staying healthy!";

  if (exercise) {
    eco = "🌿 Try walking or cycling instead of vehicles to stay fit and reduce carbon footprint!";
  } else if (junk) {
    eco = "🌱 Buy locally-sourced whole foods to reduce packaging waste!";
  }

  // Display results
  document.getElementById("scoreCircle").textContent = score;
  document.getElementById("status").textContent = status;
  document.getElementById("insight").textContent = insight;
  document.getElementById("eco").textContent = eco;
  document.getElementById("result").classList.remove("hidden");
  
  // Scroll to results
  document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

// ==================== MAKE ALL FUNCTIONS GLOBAL ====================

window.showLogin = showLogin;
window.backToWelcome = backToWelcome;
window.enterApp = enterApp;
window.logout = logout;
window.googleLogin = googleLogin;
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
window.analyze = analyze;

// ==================== CONSOLE LOG FOR DEBUG ====================
console.log("✅ LifeLens script loaded successfully");
console.log("Available global functions: showLogin, backToWelcome, enterApp, logout, googleLogin, sendOTP, verifyOTP, analyze");