var beacon = {
  session_id: "O-TX-11-403",
  fallback_dns: "uplink-fallback.virelia-water.it.com",
  token: "JBSWY3DPEBLW64TMMQQQ=="
};

if (beacon.token === "JBSWY3DPEBLW64TMMQQQ==") {
  document.querySelector('.warning').innerText = "THM{this_is_the_real_flag}";
}
