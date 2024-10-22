<?php include_once('lib/common.lib.php'); ?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="utf-8">
	<title>vbet</title>
	<meta http-equiv="imagetoolbar" content="no">
	<meta http-equiv="X-UA-Compatible" content="IE=10,chrome=1">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<link href="https://design01.codeidea.io/link_style.css" rel="stylesheet">
	<link rel="stylesheet" href="./dist/css/swiper-bundle.min.css" />
	<link rel="stylesheet" href="./dist/css/app.css" />
	<link rel="stylesheet" href="./dist/css/layout.css" />
	<link rel="stylesheet" href="./dist/css/icon.css" />
	<link rel="stylesheet" href="./dist/css/custom.css" />
	<style>
		.ex_table th{
			border-bottom-width:1px;	
			border-right-width:1px;
		}
		.ex_table th:last-child{
			border-right-width:0px;
		}
		header {display:none; }
		.quick_menu {display:none; }
		#wrap .side_menu {display:none; }
	</style>
</head>
</body>

<div class="publishing-help">
	<span class="label not">작업중</span>
	<span class="label popup">팝업</span>
	<span class="label change">수정</span>
	<span class="label add">최근 추가</span>
</div>

<?php
function txtRecord($dir)
{
	if (is_dir($dir)) {
		$handle  = opendir($dir);
		$files = array();
		while (false !== ($filename = readdir($handle))) {
			if ($filename == "." || $filename == "..") continue;
			if (is_file($dir . "/" . $filename)) {
				$files[] = $filename;
			}
		}
		closedir($handle);
		rsort($files);
		if (count($files) > 0) {
			echo '<div class="_record rsort">';
			echo '<ul>';
			foreach ($files as $f) {
				$name = '수정 ' . preg_replace("/[^0-9]*/s", "", $f);
				echo '<li><a href="' . $dir . $f . '" target="_black">' . $name . '</a></li>';
			}
			echo '</ul>';
			echo '</div>';
		}
	}
}
echo txtRecord('./@record/');
?>

<div id="publishingContainer">

	<ul class="page-link">
		<li class="" data-label="메인">
            <ul>
                <li><a href="./index_logout.html" target="_blank" class="">메인 - 로그인 전</a></li>
                <li><a href="./index.html" target="_blank" class="">메인</a></li>
            </ul>
        </li>
		<li class="" data-label="공통모달">
			<ul>
				<li><button class="pop-modal draggable_modal_open">calculator 모달</button></li>
			</ul>
		</li>
		<li class="mt20" data-label="메뉴">
            <ul>
                <li data-label="Casino">
					<ul>
						<li>
							<a href="./casino.html" target="_blank" class="">casino</a>
							<ul>
								<li><a href="./casino_detail.html" target="_blank" class="">casino detail - 1화면</a></li>
								<li><a href="./casino_detail2.html" target="_blank" class="">casino detail - 2화면</a></li>
								<li><button class="pop-modal" onclick="modalOpen('casino_list-modal')">카지노 리스트 모달</button></li>
							</ul>
						</li>
						<li>
							<a href="./casino_tournament.html" target="_blank">tournaments</a>
							<ul>
								<li><a href="./casino_tournament_detail.html" target="_blank">tournaments - detail</a></li>
							</ul>
						</li>
						<li><a href="./casino_jackpot.html" target="_blank">jackpot</a></li>
					</ul>
				</li>
				<li class="mt10" data-label="Live Casino">
					<ul>
						<li><a href="./live_casino.html" target="_blank" class="">live casino</a></li>
						<li><a href="./live_casino_tournament.html" target="_blank">tournaments</a></li>
					</ul>
				</li>
				<li class="mt10" data-label="Wonder Wheel">
					<ul>
						<li><a href="./wonderwheel.html" target="_blank" class="">Wonder Wheel</a></li>
						<li>
							<button class="pop-modal" onclick="modalOpen('wheel_promo_ticket-modal')">ticket 모달</button>
							<button class="pop-modal" onclick="modalOpen('wheel_promo_result-modal')">모바일 result 모달</button>
						</li>
					</ul>
				</li>
				<li class="mt10" data-label="Poker">
					<ul>
						<li>
							<a href="./poker.html" target="_blank" class="">poker</a>
						</li>
					</ul>
				</li>
				<li class="mt10" data-label="Esports">
					<ul>
						<li>
							<a href="./esports.html" target="_blank" class="">esports</a>
							<ul>
								<li><a href="./esports_list.html" target="_blank" class="">esports - list</a></li>
								<li><a href="./esports_detail.html" target="_blank" class="">esports - detail</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="mt10" data-label="TV Games">
					<ul>
						<li><a href="./tvgame.html" target="_blank" class="">TV Games</a></li>
						<li><a href="./tvgame_tournament.html" target="_blank" class="">tournaments</a></li>
					</ul>
				</li>
				<li class="mt10" data-label="Games">
					<ul>
						<li><a href="./game.html" target="_blank" class="">Games</a></li>
					</ul>
				</li>
				<li class="mt10" data-label="Virtual Games">
					<ul>
						<li><a href="./virtual_game.html" target="_blank" class="">Virtual Games</a></li>
					</ul>
				</li>
				<li class="mt10" data-label="Promotions">
					<ul>
						<li>
							<a href="./promotion.html" target="_blank" class="">Promotion</a>
							<ul>
								<li><button class="pop-modal" onclick="modalOpen('promotion_detail-modal')">promotion - detail 모달</button></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="mt10" data-label="Aviatrix">
					<ul>
						<li><a href="./aviatrix.html" target="_blank" class="">Aviatrix</a></li>
					</ul>
				</li>
            </ul>
        </li>
	</ul>
</div>

<!-- 모달 -->
<div id="wrap"></div>



<script src='https://design01.codeidea.io/link_script.js'></script>
<script src="./dist/js/app.js"></script>
<script src="./dist/js/jquery-1.12.4.js"></script>
        <script src="./dist/js/jquery-ui.js"></script>
<script src="./dist/js/swiper-bundle.min.js"></script>
<script src="./dist/js/custom.js"></script>


</body>

</html>