document.addEventListener('DOMContentLoaded', function() {

	const $slides = document.querySelectorAll('header>.slides > .slides-container > p');
	const $indicators = document.querySelectorAll('header>.slides > .slides-pagination > li > a');
	
	const $btnPrev = document.querySelector('header>.slides > a.prev');
	const $btnNext = document.querySelector('header>.slides > a.next');

	const $btnAuto = document.querySelector('header>.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*3); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$slides[nowIdx].classList.add('on');
	$indicators[nowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$indicators.forEach(function($indicator, idx){

		$indicator.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

			//이전 인디케이터 비활성화
			$indicators[oldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$indicators[nowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$slides[oldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$slides[nowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		oldIdx = nowIdx;

		if(nowIdx<2){
			nowIdx++;
		}else{
			nowIdx=0;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$btnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=2;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$btnAuto.addEventListener('click', function() {
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.click();
			}, 2000);
		}
	});




	
	const $bigslides = document.querySelectorAll('section>.bigslides > .slides-container > p');
	const $bigindicators = document.querySelectorAll('section>.bigslides > .slides-pagination > li > a');
	
	const $bigbtnPrev = document.querySelector('section>.bigslides > a.prev');
	const $bigbtnNext = document.querySelector('section>.bigslides > a.next');

	const $bigbtnAuto = document.querySelector('section>.bigslides>.btn_auto'); //자동재생 버튼

	let bigintervalKey = null;

	let bignowIdx = Math.floor(Math.random()*8); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let bigoldIdx = bignowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$bigslides[bignowIdx].classList.add('on');
	
	//인디케이터에 대한 클릭이벤트
	$bigindicators.forEach(function($bigindicator, idx){

		$bigindicator.addEventListener('click', function(evt){
			evt.preventDefault();

			bigoldIdx = bignowIdx;
			bignowIdx = idx;

			//이전 인디케이터 비활성화
			$bigindicators[bigoldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$bigindicators[bignowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$bigslides[bigoldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$bigslides[bignowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$bigbtnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		bigoldIdx = bignowIdx;

		if(bignowIdx<7){
			bignowIdx++;
		}else{
			bignowIdx=0;
		}





		//이전 슬라이드 사라짐
		$bigslides[bigoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$bigslides[bignowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$bigbtnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		bigoldIdx = bignowIdx;

		if(bignowIdx>0){
			bignowIdx--;
		}else{
			bignowIdx=7;
		}

		//이전 인디케이터 비활성화
		$bigindicators[bigoldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$bigindicators[bignowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$bigslides[bigoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$bigslides[bignowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$bigbtnAuto.addEventListener('click', function(evt) {
		evt.preventDefault();
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(bigintervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			bigintervalKey = setInterval(function() {
				$bigbtnNext.click();
			}, 2000);
		}
	});

	




		
	
});