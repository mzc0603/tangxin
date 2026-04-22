(function() {
    'use strict';

    var policyData = [
        {
            id: 1,
            title: '2024年跨境电商综合试验区政策最新解读',
            category: 'policy',
            categoryName: '政策解读',
            platform: '',
            date: '2024-01-15',
            views: 12580,
            desc: '详细解读2024年最新跨境电商综合试验区政策变化，包括税收优惠、通关便利化等核心内容，帮助企业把握政策红利...',
            tags: ['综合试验区', '税收优惠', '通关便利']
        },
        {
            id: 2,
            title: '跨境电商零售进口商品清单调整说明',
            category: 'tax',
            categoryName: '税率查询',
            platform: '',
            date: '2024-01-12',
            views: 8320,
            desc: '解读最新跨境电商零售进口商品清单调整内容，分析对卖家的影响，提供合规经营建议...',
            tags: ['进口清单', '零售进口']
        },
        {
            id: 3,
            title: '亚马逊2024年合规要求更新汇总',
            category: 'platform',
            categoryName: '平台合规',
            platform: 'amazon',
            date: '2024-01-10',
            views: 15680,
            desc: '汇总亚马逊2024年最新合规要求，包括产品认证、包装规范、账号安全等内容...',
            tags: ['亚马逊', '产品认证', '账号安全']
        },
        {
            id: 4,
            title: '跨境电商知识产权侵权风险防范指南',
            category: 'ip',
            categoryName: '知识产权',
            platform: '',
            date: '2024-01-08',
            views: 9450,
            desc: '全面解析跨境电商知识产权侵权风险，提供实用防范建议，保护卖家合法权益...',
            tags: ['商标侵权', '专利保护', '版权']
        },
        {
            id: 5,
            title: '跨境电商出口通关新规解读',
            category: 'logistics',
            categoryName: '物流合规',
            platform: '',
            date: '2024-01-05',
            views: 7230,
            desc: '解读跨境电商出口通关最新规定，包括申报流程、查验标准、通关时效等内容...',
            tags: ['出口通关', '海关申报', '物流时效']
        },
        {
            id: 6,
            title: 'Shopify店铺合规运营完全指南',
            category: 'platform',
            categoryName: '平台合规',
            platform: 'shopify',
            date: '2024-01-03',
            views: 11200,
            desc: 'Shopify独立站合规运营全攻略，涵盖支付合规、税务处理、数据隐私等关键要点...',
            tags: ['Shopify', '独立站', '支付合规']
        },
        {
            id: 7,
            title: '跨境电商外汇管理政策详解',
            category: 'payment',
            categoryName: '支付合规',
            platform: '',
            date: '2024-01-01',
            views: 6890,
            desc: '详解跨境电商外汇管理政策，包括外汇结算、汇率风险管理、合规申报等内容...',
            tags: ['外汇管理', '跨境结算', '汇率风险']
        },
        {
            id: 8,
            title: 'eBay平台卖家合规要求汇总',
            category: 'platform',
            categoryName: '平台合规',
            platform: 'ebay',
            date: '2023-12-28',
            views: 8560,
            desc: '汇总eBay平台卖家合规要求，包括账号管理、刊登规范、纠纷处理等内容...',
            tags: ['eBay', '账号管理', '刊登规范']
        },
        {
            id: 9,
            title: '跨境电商增值税政策解读',
            category: 'tax',
            categoryName: '税率查询',
            platform: '',
            date: '2023-12-25',
            views: 10230,
            desc: '解读跨境电商增值税政策，包括进口增值税、出口退税、税率适用等内容...',
            tags: ['增值税', '进口税', '出口退税']
        },
        {
            id: 10,
            title: '速卖通平台合规经营指南',
            category: 'platform',
            categoryName: '平台合规',
            platform: 'aliexpress',
            date: '2023-12-22',
            views: 9870,
            desc: '速卖通平台合规经营全指南，涵盖商品合规、知识产权、售后服务等要点...',
            tags: ['速卖通', '商品合规', '售后服务']
        },
        {
            id: 11,
            title: '跨境电商商标注册保护指南',
            category: 'ip',
            categoryName: '知识产权',
            platform: '',
            date: '2023-12-20',
            views: 7650,
            desc: '跨境电商商标注册保护完整指南，包括国际商标注册、商标维权等内容...',
            tags: ['商标注册', '国际商标', '商标维权']
        },
        {
            id: 12,
            title: '跨境电商物流禁限运物品清单',
            category: 'logistics',
            categoryName: '物流合规',
            platform: '',
            date: '2023-12-18',
            views: 8920,
            desc: '汇总跨境电商物流禁限运物品清单，帮助卖家规避物流风险...',
            tags: ['禁限运', '物流风险', '违禁品']
        },
        {
            id: 13,
            title: 'Wish平台卖家合规要求',
            category: 'platform',
            categoryName: '平台合规',
            platform: 'wish',
            date: '2023-12-15',
            views: 6540,
            desc: 'Wish平台卖家合规要求详解，包括产品合规、物流合规、账号安全等...',
            tags: ['Wish', '产品合规', '账号安全']
        },
        {
            id: 14,
            title: '跨境电商支付渠道合规指南',
            category: 'payment',
            categoryName: '支付合规',
            platform: '',
            date: '2023-12-12',
            views: 7890,
            desc: '跨境电商支付渠道合规指南，涵盖主流支付方式、合规要求、风险防范...',
            tags: ['支付渠道', '跨境支付', '风险防范']
        },
        {
            id: 15,
            title: '跨境电商专利申请与保护策略',
            category: 'ip',
            categoryName: '知识产权',
            platform: '',
            date: '2023-12-10',
            views: 5670,
            desc: '跨境电商专利申请与保护策略，帮助卖家保护创新成果...',
            tags: ['专利申请', '专利保护', '创新保护']
        }
    ];

    var currentPage = 1;
    var itemsPerPage = 10;
    var filteredData = [];
    var currentFilters = {
        category: 'all',
        platform: 'all',
        time: 'all',
        keyword: ''
    };

    function init() {
        initMobileMenu();
        initDropdownMenu();
        initSearch();
        initFilters();
        initPagination();
        initFAQ();
        initScrollToTop();
        initSidebarNav();
        initGuideNav();
        initTableOfContents();
        checkURLParams();
    }

    function initMobileMenu() {
        var mobileMenuBtn = document.getElementById('mobileMenuBtn');
        var navMenu = document.getElementById('navMenu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                var icon = mobileMenuBtn.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }

    function initDropdownMenu() {
        var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
        dropdownItems.forEach(function(item) {
            item.addEventListener('mouseenter', function() {
                var dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) {
                    dropdown.style.display = 'block';
                }
            });
            item.addEventListener('mouseleave', function() {
                var dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) {
                    dropdown.style.display = '';
                }
            });
        });
    }

    function initSearch() {
        var searchForms = document.querySelectorAll('.search-form, .hero-search-form, #listSearchForm');
        searchForms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                var input = form.querySelector('input[type="text"]');
                if (input && input.value.trim()) {
                    if (form.id === 'listSearchForm') {
                        e.preventDefault();
                        currentFilters.keyword = input.value.trim();
                        currentPage = 1;
                        applyFilters();
                    }
                }
            });
        });
    }

    function initFilters() {
        var categoryFilter = document.getElementById('categoryFilter');
        var platformFilter = document.getElementById('platformFilter');
        var timeFilter = document.getElementById('timeFilter');
        var sortSelect = document.getElementById('sortSelect');

        if (categoryFilter) {
            categoryFilter.addEventListener('click', function(e) {
                var li = e.target.closest('li');
                if (li) {
                    categoryFilter.querySelectorAll('li').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    li.classList.add('active');
                    currentFilters.category = li.dataset.cat;
                    currentPage = 1;
                    applyFilters();
                }
            });
        }

        if (platformFilter) {
            platformFilter.addEventListener('click', function(e) {
                var li = e.target.closest('li');
                if (li) {
                    platformFilter.querySelectorAll('li').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    li.classList.add('active');
                    currentFilters.platform = li.dataset.platform;
                    currentPage = 1;
                    applyFilters();
                }
            });
        }

        if (timeFilter) {
            timeFilter.addEventListener('click', function(e) {
                var li = e.target.closest('li');
                if (li) {
                    timeFilter.querySelectorAll('li').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    li.classList.add('active');
                    currentFilters.time = li.dataset.time;
                    currentPage = 1;
                    applyFilters();
                }
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortData(this.value);
                renderPolicyList();
            });
        }
    }

    function checkURLParams() {
        var urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.has('cat')) {
            currentFilters.category = urlParams.get('cat');
            updateFilterUI('categoryFilter', currentFilters.category);
        }
        if (urlParams.has('platform')) {
            currentFilters.platform = urlParams.get('platform');
            updateFilterUI('platformFilter', currentFilters.platform);
        }
        if (urlParams.has('q')) {
            currentFilters.keyword = urlParams.get('q');
            var listSearchInput = document.getElementById('listSearchInput');
            if (listSearchInput) {
                listSearchInput.value = currentFilters.keyword;
            }
        }

        applyFilters();
    }

    function updateFilterUI(filterId, value) {
        var filter = document.getElementById(filterId);
        if (filter) {
            filter.querySelectorAll('li').forEach(function(item) {
                item.classList.remove('active');
                if (item.dataset.cat === value || item.dataset.platform === value) {
                    item.classList.add('active');
                }
            });
        }
    }

    function applyFilters() {
        filteredData = policyData.filter(function(item) {
            var matchCategory = currentFilters.category === 'all' || item.category === currentFilters.category;
            var matchPlatform = currentFilters.platform === 'all' || item.platform === currentFilters.platform;
            var matchKeyword = !currentFilters.keyword || 
                item.title.toLowerCase().indexOf(currentFilters.keyword.toLowerCase()) !== -1 ||
                item.desc.toLowerCase().indexOf(currentFilters.keyword.toLowerCase()) !== -1 ||
                item.tags.some(function(tag) { return tag.toLowerCase().indexOf(currentFilters.keyword.toLowerCase()) !== -1; });
            
            var matchTime = true;
            if (currentFilters.time !== 'all') {
                var itemDate = new Date(item.date);
                var now = new Date();
                var diffDays = Math.floor((now - itemDate) / (1000 * 60 * 60 * 24));
                switch (currentFilters.time) {
                    case 'week': matchTime = diffDays <= 7; break;
                    case 'month': matchTime = diffDays <= 30; break;
                    case 'quarter': matchTime = diffDays <= 90; break;
                    case 'year': matchTime = diffDays <= 365; break;
                }
            }

            return matchCategory && matchPlatform && matchKeyword && matchTime;
        });

        updateActiveFilters();
        updateListTitle();
        renderPolicyList();
        renderPagination();
    }

    function updateActiveFilters() {
        var activeFilters = document.getElementById('activeFilters');
        var filterTags = document.getElementById('filterTags');
        
        if (!activeFilters || !filterTags) return;

        var tags = [];
        if (currentFilters.category !== 'all') {
            var catName = getCategoryName(currentFilters.category);
            tags.push({ type: 'category', label: catName, value: currentFilters.category });
        }
        if (currentFilters.platform !== 'all') {
            var platformName = getPlatformName(currentFilters.platform);
            tags.push({ type: 'platform', label: platformName, value: currentFilters.platform });
        }
        if (currentFilters.keyword) {
            tags.push({ type: 'keyword', label: '关键词: ' + currentFilters.keyword, value: currentFilters.keyword });
        }

        if (tags.length > 0) {
            activeFilters.style.display = 'flex';
            filterTags.innerHTML = tags.map(function(tag) {
                return '<span class="filter-tag">' + tag.label + ' <i class="fas fa-times" data-type="' + tag.type + '"></i></span>';
            }).join('');

            filterTags.querySelectorAll('.filter-tag i').forEach(function(icon) {
                icon.addEventListener('click', function() {
                    var type = this.dataset.type;
                    if (type === 'category') {
                        currentFilters.category = 'all';
                        updateFilterUI('categoryFilter', 'all');
                    } else if (type === 'platform') {
                        currentFilters.platform = 'all';
                        updateFilterUI('platformFilter', 'all');
                    } else if (type === 'keyword') {
                        currentFilters.keyword = '';
                        var listSearchInput = document.getElementById('listSearchInput');
                        if (listSearchInput) listSearchInput.value = '';
                    }
                    applyFilters();
                });
            });
        } else {
            activeFilters.style.display = 'none';
        }
    }

    function getCategoryName(cat) {
        var names = {
            'policy': '政策解读',
            'tax': '税率查询',
            'platform': '平台合规',
            'logistics': '物流合规',
            'ip': '知识产权',
            'payment': '支付合规'
        };
        return names[cat] || cat;
    }

    function getPlatformName(platform) {
        var names = {
            'amazon': '亚马逊',
            'shopify': 'Shopify',
            'ebay': 'eBay',
            'aliexpress': '速卖通',
            'wish': 'Wish'
        };
        return names[platform] || platform;
    }

    function updateListTitle() {
        var listTitle = document.getElementById('listTitle');
        if (listTitle) {
            var title = '全部政策法规';
            if (currentFilters.category !== 'all') {
                title = getCategoryName(currentFilters.category);
            }
            if (currentFilters.platform !== 'all') {
                title = getPlatformName(currentFilters.platform) + '合规';
            }
            if (currentFilters.keyword) {
                title = '"' + currentFilters.keyword + '" 搜索结果';
            }
            listTitle.textContent = title;
        }
    }

    function sortData(sortType) {
        switch (sortType) {
            case 'newest':
                filteredData.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
                break;
            case 'popular':
                filteredData.sort(function(a, b) { return b.views - a.views; });
                break;
            case 'relevant':
                if (currentFilters.keyword) {
                    filteredData.sort(function(a, b) {
                        var aScore = a.title.toLowerCase().indexOf(currentFilters.keyword.toLowerCase()) !== -1 ? 2 : 0;
                        var bScore = b.title.toLowerCase().indexOf(currentFilters.keyword.toLowerCase()) !== -1 ? 2 : 0;
                        return bScore - aScore;
                    });
                }
                break;
        }
    }

    function renderPolicyList() {
        var policyList = document.getElementById('policyList');
        var totalCount = document.getElementById('totalCount');
        
        if (!policyList) return;

        if (totalCount) {
            totalCount.textContent = filteredData.length;
        }

        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        var pageData = filteredData.slice(start, end);

        if (pageData.length === 0) {
            policyList.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>暂无符合条件的政策法规</p><a href="policy-list.html" class="btn-reset">清除筛选条件</a></div>';
            return;
        }

        policyList.innerHTML = pageData.map(function(item) {
            return '<article class="policy-item">' +
                '<div class="policy-item-content">' +
                    '<div class="policy-item-meta">' +
                        '<span class="policy-cat"><i class="fas fa-tag"></i> ' + item.categoryName + '</span>' +
                        '<span class="policy-date"><i class="fas fa-calendar-alt"></i> ' + item.date + '</span>' +
                        '<span class="policy-views"><i class="fas fa-eye"></i> ' + formatNumber(item.views) + '</span>' +
                    '</div>' +
                    '<h3 class="policy-item-title">' +
                        '<a href="policy-detail.html?id=' + item.id + '">' + item.title + '</a>' +
                    '</h3>' +
                    '<p class="policy-item-desc">' + item.desc + '</p>' +
                    '<div class="policy-item-tags">' +
                        item.tags.map(function(tag) {
                            return '<a href="policy-list.html?tag=' + encodeURIComponent(tag) + '">' + tag + '</a>';
                        }).join('') +
                    '</div>' +
                '</div>' +
                '<a href="policy-detail.html?id=' + item.id + '" class="policy-item-link">' +
                    '<i class="fas fa-arrow-right"></i>' +
                '</a>' +
            '</article>';
        }).join('');
    }

    function formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + '万';
        }
        return num.toLocaleString();
    }

    function initPagination() {
        var paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;
        
        renderPagination();
    }

    function renderPagination() {
        var paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;

        var totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        var html = '<div class="pagination">';
        
        html += '<button class="page-btn prev' + (currentPage === 1 ? ' disabled' : '') + '" ' + (currentPage === 1 ? 'disabled' : '') + '><i class="fas fa-chevron-left"></i> 上一页</button>';
        
        var startPage = Math.max(1, currentPage - 2);
        var endPage = Math.min(totalPages, startPage + 4);
        
        if (startPage > 1) {
            html += '<button class="page-num" data-page="1">1</button>';
            if (startPage > 2) {
                html += '<span class="page-ellipsis">...</span>';
            }
        }

        for (var i = startPage; i <= endPage; i++) {
            html += '<button class="page-num' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                html += '<span class="page-ellipsis">...</span>';
            }
            html += '<button class="page-num" data-page="' + totalPages + '">' + totalPages + '</button>';
        }

        html += '<button class="page-btn next' + (currentPage === totalPages ? ' disabled' : '') + '" ' + (currentPage === totalPages ? 'disabled' : '') + '>下一页 <i class="fas fa-chevron-right"></i></button>';
        
        html += '</div>';
        html += '<div class="page-info">第 ' + currentPage + ' / ' + totalPages + ' 页，共 ' + filteredData.length + ' 条</div>';
        
        paginationContainer.innerHTML = html;

        paginationContainer.querySelectorAll('.page-num').forEach(function(btn) {
            btn.addEventListener('click', function() {
                currentPage = parseInt(this.dataset.page);
                renderPolicyList();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        var prevBtn = paginationContainer.querySelector('.prev');
        var nextBtn = paginationContainer.querySelector('.next');
        
        if (prevBtn && !prevBtn.disabled) {
            prevBtn.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderPolicyList();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
        
        if (nextBtn && !nextBtn.disabled) {
            nextBtn.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPolicyList();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
    }

    function initFAQ() {
        var faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(function(item) {
            var question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', function() {
                    var isOpen = item.classList.contains('active');
                    faqItems.forEach(function(faq) {
                        faq.classList.remove('active');
                    });
                    if (!isOpen) {
                        item.classList.add('active');
                    }
                });
            }
        });

        var faqCatBtns = document.querySelectorAll('.faq-cat-btn');
        faqCatBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                faqCatBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                
                var cat = btn.dataset.cat;
                var categories = document.querySelectorAll('.faq-category');
                
                categories.forEach(function(category) {
                    if (cat === 'all' || category.id === cat) {
                        category.style.display = 'block';
                    } else {
                        category.style.display = 'none';
                    }
                });
            });
        });

        var faqSearchForm = document.getElementById('faqSearchForm');
        var faqSearchInput = document.getElementById('faqSearchInput');
        
        if (faqSearchForm && faqSearchInput) {
            faqSearchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var keyword = faqSearchInput.value.trim().toLowerCase();
                var faqItems = document.querySelectorAll('.faq-item');
                
                faqItems.forEach(function(item) {
                    var text = item.textContent.toLowerCase();
                    if (keyword && text.indexOf(keyword) === -1) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            });
        }
    }

    function initScrollToTop() {
        var scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.style.cssText = 'position:fixed;bottom:30px;right:30px;width:50px;height:50px;border-radius:50%;background:var(--primary-color);color:white;border:none;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function initSidebarNav() {
        var sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        var sidebarOffset = sidebar.offsetTop;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > sidebarOffset - 100) {
                sidebar.classList.add('fixed');
            } else {
                sidebar.classList.remove('fixed');
            }
        });
    }

    function initGuideNav() {
        var guideNav = document.querySelector('.guide-nav');
        var guideNavItems = document.querySelectorAll('.guide-nav-item');
        
        if (!guideNav || guideNavItems.length === 0) return;

        var guideNavOffset = guideNav.offsetTop;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > guideNavOffset - 100) {
                guideNav.classList.add('fixed');
            } else {
                guideNav.classList.remove('fixed');
            }

            var sections = document.querySelectorAll('.guide-section-block');
            sections.forEach(function(section) {
                var rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    guideNavItems.forEach(function(item) {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === '#' + section.id) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        });

        guideNavItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var target = document.getElementById(targetId);
                if (target) {
                    var offsetTop = target.offsetTop - 120;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });
    }

    function initTableOfContents() {
        var tocList = document.querySelector('.toc-list');
        var articleBody = document.querySelector('.article-body');
        
        if (!tocList || !articleBody) return;

        var headings = articleBody.querySelectorAll('h2[id]');
        
        if (headings.length === 0) return;

        tocList.innerHTML = '';
        headings.forEach(function(heading) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + heading.id;
            a.textContent = heading.textContent;
            a.addEventListener('click', function(e) {
                e.preventDefault();
                var offsetTop = heading.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            });
            li.appendChild(a);
            tocList.appendChild(li);
        });

        var toc = document.querySelector('.article-toc');
        if (toc) {
            var tocOffset = toc.offsetTop;
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > tocOffset - 100) {
                    toc.classList.add('fixed');
                } else {
                    toc.classList.remove('fixed');
                }

                headings.forEach(function(heading) {
                    var rect = heading.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        tocList.querySelectorAll('a').forEach(function(link) {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === '#' + heading.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
