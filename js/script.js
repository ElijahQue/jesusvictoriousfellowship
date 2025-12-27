document.addEventListener('DOMContentLoaded', function() {
    console.log('JVF Site Loaded');

    // 1. Dynamic Year Update
    document.querySelectorAll('.current-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // 2. Navigation Active State
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Tab Switching Logic (for Index page)
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
                const target = document.getElementById(`${btn.dataset.tab}-content`);
                if(target) target.classList.add('active');
            });
        });
    }

    // 4. Dynamic Events Loader
    const eventContainer = document.getElementById('events-container');
    if (eventContainer) {
        const events = [
            { title: "Event Name", date: "Event Date", location: "Event Location", desc: "Description", type: "Weekly" },
            { title: "Event Name", date: "Event Date", location: "Event Location", desc: "Description", type: "Weekly" },
            { title: "Event Name", date: "Event Date", location: "Event Location", desc: "Description", type: "Weekly" },
        ];

        eventContainer.innerHTML = events.map((ev, index) => `
            <div class="card-jvf" style="text-align: left;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <span class="badge bg-warning text-dark">${ev.type}</span>
                    <small class="text-muted">${ev.date}</small>
                </div>
                <h3>${ev.title}</h3>
                <p><i class="fas fa-map-marker-alt text-warning me-2"></i>${ev.location}</p>
                <p>${ev.desc}</p>
            </div>
        `).join('');
    }
});