// Tyxar Dashboard JS
// Handles sidebar toggle and dashboard time

document.addEventListener('DOMContentLoaded', function () {
	const sidebar = document.getElementById('sidebar');
	const hamburger = document.getElementById('sidebarHamburger');
	const closeBtn = document.getElementById('sidebarClose');

	// Sidebar open (mobile)
	if (hamburger) {
		hamburger.addEventListener('click', function () {
			sidebar.classList.add('open');
			document.body.style.overflow = 'hidden'; // Prevent background scroll
		});
	}

	// Sidebar close (mobile)
	if (closeBtn) {
		closeBtn.addEventListener('click', function () {
			sidebar.classList.remove('open');
			document.body.style.overflow = '';
		});
	}

	// Hide sidebar and hamburger on desktop resize
	function handleResize() {
		if (window.innerWidth > 700) {
			sidebar.classList.remove('open');
			document.body.style.overflow = '';
		}
	}
	window.addEventListener('resize', handleResize);
	handleResize();

	// Dashboard time updater
	function updateTime() {
		const el = document.getElementById('dashboardTime');
		if (!el) return;
		const now = new Date();
		el.textContent = now.toLocaleString(undefined, {
			weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
			hour: '2-digit', minute: '2-digit', second: '2-digit'
		});
	}
	updateTime();
	setInterval(updateTime, 1000);
});
