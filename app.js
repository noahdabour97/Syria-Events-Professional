// Modern Professional Syrian Events Guide - JavaScript
class SyrianEventsApp {
    constructor() {
        this.currentPage = 'home';
        this.currentEvent = null;
        this.filteredEvents = [];
        this.allEvents = [];
        this.searchTerm = '';
        this.selectedCategory = '';
        this.selectedDate = '';
        
        // Team Members Data
        this.teamMembers = [
            {
                name: "abdulraheem_297079",
                studentId: "297079", 
                major: "هندسة معلوماتية",
                university: "الجامعة الافتراضية السورية",
                role: "مطور واجهات المستخدم"
            },
            {
                name: "abd_allah",
                studentId: "297181",
                major: "هندسة معلوماتية",
                university: "الجامعة الافتراضية السورية", 
                role: "مطور قواعد البيانات"
            },
            {
                name: "majd",
                studentId: "128956",
                major: "هندسة معلوماتية",
                university: "الجامعة الافتراضية السورية",
                role: "مصمم واجهات المستخدم"
            },
            {
                name: "ghina",
                studentId: "139537",
                major: "هندسة معلوماتية", 
                university: "الجامعة الافتراضية السورية",
                role: "محلل أنظمة"
            },
            {
                name: "mohamad",
                studentId: "351592",
                major: "هندسة معلوماتية",
                university: "الجامعة الافتراضية السورية",
                role: "مطور البرمجيات"
            }
        ];

        // Events Data
        this.eventsData = [
            {
                id: 1,
                title: "معرض دمشق الثقافي الكبير",
                date: "2025-12-20",
                location: "قصر المؤتمرات - دمشق",
                category: "ثقافة",
                description: "معرض فني وثقافي شامل يضم أعمال أبرز الفنانين السوريين والعرب",
                fullDescription: "معرض استثنائي يجمع تحت سقف واحد أروع الأعمال الفنية والثقافية من مختلف أنحاء سوريا والوطن العربي. يشمل المعرض قطع أثرية نادرة، لوحات فنية معاصرة، منحوتات تراثية، بالإضافة إلى عروض تفاعلية تحكي قصة الحضارة السورية العريقة. سيتضمن المعرض أيضاً ورش عمل فنية، محاضرات ثقافية، وأمسيات شعرية تقدم على مدى أسبوع كامل.",
                featured: true,
                organizer: "وزارة الثقافة السورية",
                ticketPrice: "مجاني",
                expectedAttendees: "5000+ زائر",
                schedule: [
                    { time: "10:00 ص", activity: "افتتاح المعرض وكلمة ترحيبية" },
                    { time: "11:00 ص", activity: "جولة إرشادية في أقسام المعرض" },
                    { time: "02:00 م", activity: "ورشة فنية للأطفال" },
                    { time: "04:00 م", activity: "محاضرة عن التراث السوري" },
                    { time: "07:00 م", activity: "أمسية شعرية وموسيقية" }
                ]
            },
            {
                id: 2,
                title: "مهرجان حلب للموسيقى العربية",
                date: "2025-12-25",
                location: "قلعة حلب التاريخية",
                category: "موسيقى",
                description: "أمسيات موسيقية رائعة بمشاركة نجوم الطرب العربي في أجواء تراثية استثنائية",
                fullDescription: "مهرجان موسيقي فريد من نوعه يقام في رحاب قلعة حلب التاريخية، حيث تمتزج عراقة المكان بسحر الموسيقى العربية الأصيلة. يشارك في المهرجان كوكبة من أشهر المطربين والعازفين العرب، ويقدم برنامجاً متنوعاً يشمل الموسيقى الكلاسيكية العربية، الموشحات الحلبية، والأغاني التراثية. كما يتضمن المهرجان عروضاً للفرق الشعبية وأمسيات للموسيقى المعاصرة.",
                featured: true,
                organizer: "مديرية ثقافة حلب",
                ticketPrice: "2000 - 10000 ل.س",
                expectedAttendees: "3000+ زائر",
                schedule: [
                    { time: "06:00 م", activity: "افتتاح المهرجان والعرض الافتتاحي" },
                    { time: "07:30 م", activity: "أمسية الموشحات الحلبية" },
                    { time: "09:00 م", activity: "حفل نجوم الطرب العربي" },
                    { time: "11:00 م", activity: "عرض الفرق الشعبية" }
                ]
            },
            {
                id: 3,
                title: "بطولة اللاذقية الرياضية الشاملة", 
                date: "2025-11-01",
                location: "المدينة الرياضية - اللاذقية",
                category: "رياضة",
                description: "منافسات رياضية متنوعة للشباب والناشئين في أجواء تنافسية مثيرة",
                fullDescription: "بطولة رياضية شاملة تضم أكثر من 15 لعبة رياضية مختلفة، من كرة القدم وكرة السلة إلى السباحة وألعاب القوى والرياضات المائية. تهدف البطولة إلى اكتشاف المواهب الرياضية الشابة وتشجيع النشاط البدني في المجتمع. تشمل البطولة فئات عمرية مختلفة وتقدم جوائز قيمة للفائزين، بالإضافة إلى برامج تدريبية متخصصة.",
                featured: true,
                organizer: "الاتحاد الرياضي السوري",
                ticketPrice: "500 - 2000 ل.س",
                expectedAttendees: "8000+ متفرج",
                schedule: [
                    { time: "08:00 ص", activity: "منافسات ألعاب القوى" },
                    { time: "10:00 ص", activity: "مباريات كرة القدم للناشئين" },
                    { time: "02:00 م", activity: "منافسات السباحة" },
                    { time: "04:00 م", activity: "نهائيات كرة السلة" },
                    { time: "07:00 م", activity: "حفل ختام البطولة وتوزيع الجوائز" }
                ]
            },
            {
                id: 4,
                title: "مهرجان حمص للسينما العربية",
                date: "2025-11-05",
                location: "مسرح حمص الوطني",
                category: "ثقافة",
                description: "عروض سينمائية لأفضل الأفلام العربية الحديثة مع لقاءات حصرية مع النجوم",
                fullDescription: "مهرجان سينمائي متميز يعرض باقة منتقاة من أجود الأفلام العربية الحديثة والكلاسيكية. يتضمن المهرجان مسابقات للأفلام الوثائقية والقصيرة، ورش عمل في صناعة السينما، لقاءات مع صناع الأفلام والممثلين، بالإضافة إلى عروض خاصة للأفلام السورية. كما يشمل المهرجان معرضاً للصور السينمائية وأمسيات ثقافية متنوعة.",
                featured: false,
                organizer: "المؤسسة العامة للسينما",
                ticketPrice: "1000 - 3000 ل.س",
                expectedAttendees: "2500+ زائر",
                schedule: [
                    { time: "05:00 م", activity: "افتتاح المهرجان وعرض الفيلم الافتتاحي" },
                    { time: "07:30 م", activity: "لقاء مع نجوم السينما العربية" },
                    { time: "09:00 م", activity: "عرض مجموعة أفلام قصيرة" },
                    { time: "10:30 م", activity: "أمسية ثقافية وموسيقية" }
                ]
            },
            {
                id: 5,
                title: "معرض طرطوس للتراث السوري",
                date: "2025-11-10",
                location: "المتحف الوطني - طرطوس",
                category: "عائلي",
                description: "عرض شامل للحرف التقليدية والتراث الشعبي السوري مع أنشطة تفاعلية للعائلات",
                fullDescription: "معرض تراثي عائلي يأخذ الزوار في رحلة عبر الزمن لاستكشاف ثراء التراث السوري الأصيل. يضم المعرض عروضاً حية للحرف التقليدية مثل النسيج، الخزف، النجارة، والحدادة التراثية. كما يشمل عروضاً للأزياء الشعبية، المأكولات التراثية، والألعاب الشعبية القديمة. يتضمن المعرض أنشطة تعليمية وترفيهية للأطفال وورش عمل تفاعلية لجميع أفراد العائلة.",
                featured: false,
                organizer: "مديرية السياحة في طرطوس",
                ticketPrice: "مجاني",
                expectedAttendees: "4000+ زائر",
                schedule: [
                    { time: "09:00 ص", activity: "افتتاح المعرض وعروض الحرف التراثية" },
                    { time: "11:00 ص", activity: "ورشة تعليمية للأطفال" },
                    { time: "01:00 م", activity: "عرض الأزياء الشعبية التراثية" },
                    { time: "03:00 م", activity: "تذوق المأكولات التراثية" },
                    { time: "05:00 م", activity: "عروض الدبكة والفولكلور الشعبي" }
                ]
            },
            {
                id: 6,
                title: "مهرجان السويداء للعنب والنبيذ",
                date: "2025-11-15", 
                location: "وادي العنب - السويداء",
                category: "عائلي",
                description: "احتفالية سنوية بموسم قطف العنب والتراث الزراعي مع فعاليات ممتعة للعائلات",
                fullDescription: "مهرجان تراثي زراعي فريد يحتفل بموسم قطف العنب في محافظة السويداء الشهيرة بكرومها وإنتاجها المتميز. يتضمن المهرجان جولات في الكروم، تجارب قطف العنب، عروض لطرق إنتاج النبيذ التقليدية، مسابقات زراعية، وأنشطة ترفيهية للأطفال. كما يشمل معرضاً للمنتجات الزراعية المحلية، مأكولات شعبية، وعروض فولكلورية تعكس تراث المنطقة العريق.",
                featured: true,
                organizer: "اتحاد الفلاحين السوري",
                ticketPrice: "1500 - 4000 ل.س",
                expectedAttendees: "6000+ زائر",
                schedule: [
                    { time: "08:00 ص", activity: "جولة في الكروم وتجربة قطف العنب" },
                    { time: "10:30 ص", activity: "ورشة صناعة النبيذ التقليدي" },
                    { time: "12:30 م", activity: "مسابقات زراعية وألعاب ريفية" },
                    { time: "03:00 م", activity: "معرض المنتجات الزراعية المحلية" },
                    { time: "06:00 م", activity: "عشاء تراثي وعروض الدبكة" }
                ]
            }
        ];

        this.contactInfo = {
            email: "abdulraheem@syriaevents.sy",
            phone: "+963 11 1234567",
            address: "دمشق، الجمهورية العربية السورية"
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadHomePage();
        this.filteredEvents = [...this.eventsData];
        
        // Initialize with animation
        document.addEventListener('DOMContentLoaded', () => {
            this.addPageAnimations();
        });
    }

    setupEventListeners() {
        // Search and filter event listeners
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const dateFilter = document.getElementById('date-filter');
        const contactForm = document.getElementById('contact-form');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.applyFilters();
            });
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.selectedCategory = e.target.value;
                this.applyFilters();
            });
        }

        if (dateFilter) {
            dateFilter.addEventListener('change', (e) => {
                this.selectedDate = e.target.value;
                this.applyFilters();
            });
        }

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.handleContactForm(e);
            });
        }

        // Add smooth scrolling to navigation
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    addPageAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.team-card, .category-card, .event-card, .about-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Navigation Functions
    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.style.display = 'none';
        });

        // Show selected page
        const targetPage = document.getElementById(pageId + '-page');
        if (targetPage) {
            targetPage.style.display = 'block';
            targetPage.classList.add('fade-in');
        }

        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`[onclick*="showPage('${pageId}')"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        this.currentPage = pageId;

        // Load page-specific content
        switch(pageId) {
            case 'home':
                this.loadHomePage();
                break;
            case 'events':
                this.loadEventsPage();
                break;
            case 'event':
                this.loadEventDetailsPage();
                break;
            case 'about':
                this.loadAboutPage();
                break;
            case 'contact':
                this.loadContactPage();
                break;
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Home Page Functions
    loadHomePage() {
        this.loadFeaturedEventsCarousel();
    }

    loadFeaturedEventsCarousel() {
        const carouselContent = document.getElementById('featured-carousel-content');
        if (!carouselContent) return;

        carouselContent.innerHTML = '';
        const featuredEvents = this.eventsData.filter(event => event.featured);

        featuredEvents.forEach((event, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            carouselItem.innerHTML = `
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-img-top">
                                    <i class="fas fa-${this.getCategoryIcon(event.category)} me-3"></i>
                                    ${event.title}
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">${event.title}</h3>
                                    <div class="row text-center mb-4">
                                        <div class="col-md-4">
                                            <div class="event-meta-item">
                                                <i class="fas fa-calendar-alt"></i>
                                                <span>${this.formatDate(event.date)}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="event-meta-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                <span>${event.location}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="event-meta-item">
                                                <i class="fas fa-users"></i>
                                                <span>${event.expectedAttendees}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="event-badge badge-${event.category.toLowerCase()} mb-3">
                                        ${event.category}
                                    </div>
                                    <p class="card-text">${event.description}</p>
                                    <div class="d-flex gap-3 justify-content-center">
                                        <button class="btn btn-primary" onclick="app.showEventDetails(${event.id})">
                                            <i class="fas fa-eye me-2"></i>عرض التفاصيل
                                        </button>
                                        <button class="btn btn-outline-primary" onclick="app.addToCalendar(${event.id})">
                                            <i class="fas fa-calendar-plus me-2"></i>أضف للتقويم
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            carouselContent.appendChild(carouselItem);
        });
    }

    // Events Page Functions
    loadEventsPage() {
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...this.eventsData];

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(event => 
                event.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                event.location.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }

        // Apply category filter
        if (this.selectedCategory) {
            filtered = filtered.filter(event => event.category === this.selectedCategory);
        }

        // Apply date filter
        if (this.selectedDate) {
            filtered = filtered.filter(event => event.date === this.selectedDate);
        }

        this.filteredEvents = filtered;
        this.displayEvents();
    }

    displayEvents() {
        const eventsGrid = document.getElementById('events-grid');
        const noResults = document.getElementById('no-results');
        
        if (!eventsGrid) return;

        eventsGrid.innerHTML = '';

        if (this.filteredEvents.length === 0) {
            eventsGrid.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            return;
        }

        eventsGrid.style.display = 'flex';
        if (noResults) noResults.style.display = 'none';

        this.filteredEvents.forEach(event => {
            const eventCard = this.createEventCard(event);
            eventsGrid.appendChild(eventCard);
        });
    }

    createEventCard(event) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        
        col.innerHTML = `
            <div class="event-card">
                <div class="event-card-image">
                    <i class="fas fa-${this.getCategoryIcon(event.category)} me-2"></i>
                    ${event.title}
                    <div class="event-badge badge-${event.category.toLowerCase()}">
                        ${event.category}
                    </div>
                </div>
                <div class="event-card-body">
                    <h4 class="event-card-title">${event.title}</h4>
                    <div class="event-card-meta">
                        <div class="event-meta-item">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${this.formatDate(event.date)}</span>
                        </div>
                        <div class="event-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                        <div class="event-meta-item">
                            <i class="fas fa-ticket-alt"></i>
                            <span>${event.ticketPrice}</span>
                        </div>
                    </div>
                    <p class="event-card-description">${event.description}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary flex-fill" onclick="app.showEventDetails(${event.id})">
                            <i class="fas fa-eye me-1"></i>التفاصيل
                        </button>
                        <button class="btn btn-outline-primary" onclick="app.shareEvent(${event.id})" title="مشاركة الفعالية">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        return col;
    }

    // Event Details Functions
    showEventDetails(eventId) {
        const event = this.eventsData.find(e => e.id === eventId);
        if (!event) return;

        this.currentEvent = event;
        this.showPage('event');
    }

    loadEventDetailsPage() {
        if (!this.currentEvent) {
            // Show first event as default
            this.currentEvent = this.eventsData[0];
        }

        const detailsContent = document.getElementById('event-details-content');
        if (!detailsContent) return;

        const event = this.currentEvent;
        const relatedEvents = this.getRelatedEvents(event);

        detailsContent.innerHTML = `
            <div class="event-hero-image">
                <i class="fas fa-${this.getCategoryIcon(event.category)} me-3"></i>
                ${event.title}
            </div>

            <div class="row">
                <div class="col-lg-8">
                    <div class="event-details-card">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <div>
                                <h1 class="mb-3">${event.title}</h1>
                                <div class="event-badge badge-${event.category.toLowerCase()} mb-3">
                                    <i class="fas fa-${this.getCategoryIcon(event.category)} me-2"></i>
                                    ${event.category}
                                </div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-primary" onclick="app.addToCalendar(${event.id})">
                                    <i class="fas fa-calendar-plus me-2"></i>أضف للتقويم
                                </button>
                                <button class="btn btn-outline-primary" onclick="app.shareEvent(${event.id})">
                                    <i class="fas fa-share-alt me-2"></i>مشاركة
                                </button>
                            </div>
                        </div>

                        <div class="event-info-grid">
                            <div class="event-info-item">
                                <div class="event-info-icon">
                                    <i class="fas fa-calendar-alt"></i>
                                </div>
                                <div class="event-info-content">
                                    <h6>تاريخ الفعالية</h6>
                                    <p>${this.formatDate(event.date)}</p>
                                </div>
                            </div>
                            <div class="event-info-item">
                                <div class="event-info-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="event-info-content">
                                    <h6>موقع الفعالية</h6>
                                    <p>${event.location}</p>
                                </div>
                            </div>
                            <div class="event-info-item">
                                <div class="event-info-icon">
                                    <i class="fas fa-ticket-alt"></i>
                                </div>
                                <div class="event-info-content">
                                    <h6>أسعار التذاكر</h6>
                                    <p>${event.ticketPrice}</p>
                                </div>
                            </div>
                            <div class="event-info-item">
                                <div class="event-info-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="event-info-content">
                                    <h6>العدد المتوقع</h6>
                                    <p>${event.expectedAttendees}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <h3 class="mb-3">
                                    <i class="fas fa-info-circle me-2"></i>
                                    وصف تفصيلي للفعالية
                                </h3>
                                <p class="lead">${event.fullDescription}</p>
                            </div>
                        </div>

                        ${event.schedule ? this.renderEventSchedule(event.schedule) : ''}
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="event-details-card">
                        <h4 class="mb-3">
                            <i class="fas fa-building me-2"></i>
                            معلومات المنظم
                        </h4>
                        <div class="mb-3">
                            <strong>المنظم:</strong> ${event.organizer}
                        </div>
                        <div class="mb-4">
                            <strong>للاستفسار:</strong><br>
                            ${this.contactInfo.email}<br>
                            ${this.contactInfo.phone}
                        </div>
                        
                        <div class="d-grid gap-2">
                            <button class="btn btn-success btn-lg" onclick="app.registerForEvent(${event.id})">
                                <i class="fas fa-user-plus me-2"></i>
                                تسجيل المشاركة
                            </button>
                            <button class="btn btn-outline-primary" onclick="app.showPage('contact')">
                                <i class="fas fa-envelope me-2"></i>
                                تواصل معنا
                            </button>
                        </div>
                    </div>

                    ${relatedEvents.length > 0 ? this.renderRelatedEvents(relatedEvents) : ''}
                </div>
            </div>
        `;
    }

    renderEventSchedule(schedule) {
        return `
            <div class="row mt-4">
                <div class="col-12">
                    <h4 class="mb-3">
                        <i class="fas fa-clock me-2"></i>
                        برنامج الفعالية
                    </h4>
                    <div class="schedule-list">
                        ${schedule.map(item => `
                            <div class="schedule-item">
                                <div class="schedule-time">
                                    <i class="fas fa-clock"></i>
                                    ${item.time}
                                </div>
                                <div class="schedule-activity">
                                    ${item.activity}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderRelatedEvents(relatedEvents) {
        return `
            <div class="event-details-card mt-4">
                <h4 class="mb-3">
                    <i class="fas fa-star me-2"></i>
                    فعاليات ذات صلة
                </h4>
                ${relatedEvents.map(event => `
                    <div class="related-event-item" onclick="app.showEventDetails(${event.id})">
                        <div class="related-event-content">
                            <h6>${event.title}</h6>
                            <p class="small text-muted mb-1">
                                <i class="fas fa-calendar-alt me-1"></i>
                                ${this.formatDate(event.date)}
                            </p>
                            <p class="small text-muted">
                                <i class="fas fa-map-marker-alt me-1"></i>
                                ${event.location}
                            </p>
                        </div>
                        <div class="related-event-arrow">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    getRelatedEvents(currentEvent) {
        return this.eventsData
            .filter(event => 
                event.id !== currentEvent.id && 
                (event.category === currentEvent.category || Math.random() > 0.6)
            )
            .slice(0, 3);
    }

    // About Page Functions
    loadAboutPage() {
        // About page content is static, no additional loading needed
    }

    // Contact Page Functions
    loadContactPage() {
        // Contact page content is static, no additional loading needed
    }

    handleContactForm(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        // Validate form
        if (!name || !email || !message) {
            this.showAlert('danger', 'يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showAlert('danger', 'يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // Simulate form submission
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading"></span> جاري الإرسال...';
        
        setTimeout(() => {
            this.showAlert('success', 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً في أقرب وقت ممكن.');
            
            // Reset form
            document.getElementById('contact-form').reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 2000);
    }

    showAlert(type, message) {
        const alertContainer = document.getElementById('contact-alert');
        if (!alertContainer) return;
        
        alertContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }

    // Filter Functions
    filterByCategory(category) {
        this.showPage('events');
        
        // Wait for page to load then apply filter
        setTimeout(() => {
            const categoryFilter = document.getElementById('category-filter');
            if (categoryFilter) {
                categoryFilter.value = category;
                this.selectedCategory = category;
                this.applyFilters();
            }
        }, 100);
    }

    clearFilters() {
        this.searchTerm = '';
        this.selectedCategory = '';
        this.selectedDate = '';
        
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const dateFilter = document.getElementById('date-filter');
        
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        if (dateFilter) dateFilter.value = '';
        
        this.applyFilters();
    }

    // Event Actions
    addToCalendar(eventId) {
        const event = this.eventsData.find(e => e.id === eventId);
        if (!event) return;
        
        // Create calendar event URL (Google Calendar)
        const startDate = event.date.replace(/-/g, '');
        const title = encodeURIComponent(event.title);
        const details = encodeURIComponent(event.description);
        const location = encodeURIComponent(event.location);
        
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${startDate}&details=${details}&location=${location}`;
        
        window.open(calendarUrl, '_blank');
        
        // Show success message
        this.showNotification('تم إضافة الفعالية إلى التقويم بنجاح!', 'success');
    }

    shareEvent(eventId) {
        const event = this.eventsData.find(e => e.id === eventId);
        if (!event) return;
        
        const shareText = `${event.title} - ${this.formatDate(event.date)} في ${event.location}`;
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: shareText,
                url: shareUrl
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
                this.showNotification('تم نسخ معلومات الفعالية بنجاح!', 'success');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = `${shareText}\n${shareUrl}`;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showNotification('تم نسخ معلومات الفعالية بنجاح!', 'success');
            });
        }
    }

    registerForEvent(eventId) {
        const event = this.eventsData.find(e => e.id === eventId);
        if (!event) return;
        
        // Simulate registration process
        this.showNotification('شكراً لتسجيل مشاركتك! سيتم التواصل معك قريباً بتفاصيل إضافية.', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} notification-toast`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            ${message}
        `;
        
        // Add toast styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 9999;
            max-width: 400px;
            animation: slideInRight 0.5s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 4000);
    }

    // Utility Functions
    formatDate(dateString) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        };
        
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', options);
    }

    getCategoryIcon(category) {
        const icons = {
            'ثقافة': 'palette',
            'موسيقى': 'music',
            'رياضة': 'trophy',
            'عائلي': 'users',
            'سينما': 'film'
        };
        
        return icons[category] || 'calendar';
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Global app instance
const app = new SyrianEventsApp();

// Global functions for onclick handlers
function showPage(pageId) {
    app.showPage(pageId);
}

function filterByCategory(category) {
    app.filterByCategory(category);
}

function clearFilters() {
    app.clearFilters();
}

// Additional CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .schedule-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--bg-secondary);
        border-radius: var(--radius-sm);
        border-right: 4px solid #1FB8CD;
    }
    
    .schedule-time {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        color: #1FB8CD;
        min-width: 120px;
    }
    
    .schedule-activity {
        flex: 1;
        color: var(--text-primary);
    }
    
    .related-event-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        margin-bottom: 0.5rem;
        background: var(--bg-secondary);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .related-event-item:hover {
        background: #1FB8CD;
        color: white;
        transform: translateX(-5px);
    }
    
    .related-event-item:hover .text-muted {
        color: rgba(255, 255, 255, 0.8) !important;
    }
    
    .related-event-content h6 {
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .related-event-arrow {
        font-size: 0.9rem;
        opacity: 0.7;
    }
`;

document.head.appendChild(notificationStyles);

/* TRANSLATIONS: expand these keys for the whole site */
const translations = {
  en: {
    "navbar.brand": "Syrian Events Guide",
    "navbar.home": "Home",
    "navbar.events": "Events",
    "navbar.event_details": "Event Details",
    "navbar.about": "About",
    "navbar.contact": "Contact Us",
    "hero.title": "Discover the most wonderful <span class=\"gradient-text\">Events</span> in Syrian Cities",
    "hero.subtitle": "Your first and most comprehensive platform to explore all cultural, entertainment, and sports events in beloved Syria.",
    "hero.explore_events": "Explore Events",
    "hero.about_us": "About Us",
    "hero.music_festivals": "Music Festivals",
    "hero.art_exhibitions": "Art Exhibitions",
    "hero.sport_tournaments": "Sport Tournaments",
    "hero.family_events": "Family Events",
    "team.title_gradient": "Our Team",
    "team.title_founder": "Founders",
    "team.subtitle": "Students of Informatics Engineering at the Syrian Virtual University",
    "team.role_frontend": "Frontend Developer",
    "team.role_database": "Database Developer",
    "team.role_designer": "UI Designer",
    "team.role_analyst": "Systems Analyst",
    "team.role_developer": "Software Developer",
    "team.university": "Syrian Virtual University",
    "featured_events.title": "Featured",
    "featured_events.title_gradient": "Events",
    "featured_events.subtitle": "The most prominent events this week",
    "meta.title": "Syrian City Events Guide - Your First Platform to Discover Events"
  },
  ar: {
    "navbar.brand": "دليل الفعاليات السوري",
    "navbar.home": "الرئيسية",
    "navbar.events": "الفعاليات",
    "navbar.event_details": "تفاصيل الفعالية",
    "navbar.about": "عن الدليل",
    "navbar.contact": "اتصل بنا",
    "hero.title": "اكتشف أروع <span class=\"gradient-text\">الفعاليات</span> في المدن السورية",
    "hero.subtitle": "منصتكم الأولى والأشمل لاستكشاف جميع الفعاليات الثقافية والترفيهية والرياضية في سوريا الحبيبة",
    "hero.explore_events": "استكشف الفعاليات",
    "hero.about_us": "تعرف علينا",
    "hero.music_festivals": "مهرجانات موسيقية",
    "hero.art_exhibitions": "معارض فنية",
    "hero.sport_tournaments": "بطولات رياضية",
    "hero.family_events": "فعاليات عائلية",
    "team.title_gradient": "فريق العمل",
    "team.title_founder": "المؤسس",
    "team.subtitle": "طلاب هندسة المعلوماتية في الجامعة الافتراضية السورية",
    "team.role_frontend": "مطور واجهات المستخدم",
    "team.role_database": "مطور قواعد البيانات",
    "team.role_designer": "مصمم واجهات المستخدم",
    "team.role_analyst": "محلل أنظمة",
    "team.role_developer": "مطور البرمجيات",
    "team.university": "الجامعة الافتراضية السورية",
    "featured_events.title": "الفعاليات",
    "featured_events.title_gradient": "البارزة",
    "featured_events.subtitle": "أهم الفعاليات المميزة هذا الأسبوع",
    "meta.title": "دليل فعاليات المدن السورية - منصتكم الأولى لاكتشاف الفعاليات"
  }
};

function setLanguage(lang) {
  // 1. set html lang + dir
  document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
  document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';

  // 2. set body class for CSS mirroring & fonts
  document.body.classList.remove('ltr','rtl');
  document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');

  // 3. translate elements with data-i18n (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] != null) {
      el.innerHTML = translations[lang][key]; // Use innerHTML to allow for nested tags like <span>
    }
  });

  // 4. translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] != null) {
      el.placeholder = translations[lang][key];
    }
  });

  // 5. update meta title if present in translations
  if (translations[lang] && translations[lang]['meta.title']) {
    document.title = translations[lang]['meta.title'];
  }

  // 6. persist
  localStorage.setItem('siteLang', lang);
}

// Hook up flag buttons
document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnAr = document.getElementById('btn-ar');

  if (btnEn) {
    btnEn.addEventListener('click', () => setLanguage('en'));
  }
  if (btnAr) {
    btnAr.addEventListener('click', () => setLanguage('ar'));
  }

  // Apply saved language on load
  const saved = localStorage.getItem('siteLang') || 'ar'; // default Arabic
  setLanguage(saved);
});

