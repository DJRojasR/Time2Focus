// Arma el enlace de ayuda (GitHub Issues) a partir de la dirección de la página.
// Ejemplo: tuusuario.github.io/time2focus → github.com/tuusuario/time2focus/issues
(function () {
  var host = location.hostname;
  if (!host.endsWith(".github.io")) return;
  var usuario = host.replace(".github.io", "");
  var repo = location.pathname.split("/")[1] || "time2focus";
  var url = "https://github.com/" + usuario + "/" + repo + "/issues";
  document.querySelectorAll(".enlace-ayuda").forEach(function (a) {
    a.href = url;
  });
})();
