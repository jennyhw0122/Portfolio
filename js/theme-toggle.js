document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const arrowIcon = document.getElementById('arrow-icon');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');
    const root = document.documentElement;
    
    // 초기 테마 설정
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);
    
    // 테마 버튼 클릭 시 드롭다운 및 화살표 토글
    themeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      // 토글 active 클래스
      const isActive = themeButton.classList.toggle('active');
      themeDropdown.classList.toggle('show');
      // 아이콘 변경: 닫힘일 때는 arrow-down, 열림일 때는 arrow-up
      if (isActive) {
        arrowIcon.setAttribute('data-icon', 'ic:round-keyboard-arrow-up');
      } else {
        arrowIcon.setAttribute('data-icon', 'ic:round-keyboard-arrow-down');
      }
    });
    
    // 드롭다운 옵션 클릭 시 처리
    themeOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedTheme = e.currentTarget.dataset.theme;
        root.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        themeDropdown.classList.remove('show');
        themeButton.classList.remove('active');
        arrowIcon.setAttribute('data-icon', 'ic:round-keyboard-arrow-down');
      });
    });
    
    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
      if (!themeButton.contains(e.target) && !themeDropdown.contains(e.target)) {
        themeDropdown.classList.remove('show');
        themeButton.classList.remove('active');
        arrowIcon.setAttribute('data-icon', 'ic:round-keyboard-arrow-down');
      }
    });
  });