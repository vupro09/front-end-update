import React, { useEffect, useState } from "react";
import LienHe from "../trangchu/LienHe";

const data = [
	{
		title: "1. Ai có thể tham gia hiến máu?",
		content: [
			"- Tất cả mọi người từ 18 - 60 tuổi, thực sự tình nguyện hiến máu của mình để cứu chữa người bệnh.",
			"- Cân nặng ít nhất là 45kg đối với phụ nữ, nam giới. Lượng máu hiến mỗi lần không quá 9ml/kg cân nặng và không quá 500ml mỗi lần.",
			"- Không bị nhiễm hoặc không có các hành vi lây nhiễm HIV và các bệnh lây nhiễm qua đường truyền máu khác.",
			"- Thời gian giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ.",
			"- Có giấy tờ tùy thân.",
		],
	},
	{
		title: "2. Ai là người không nên hiến máu?",
		content: [
			"- Người đã nhiễm hoặc đã thực hiện hành vi có nguy cơ nhiễm HIV, viêm gan B, viêm gan C, và các vius lây qua đường truyền máu.",
			"- Người có các bệnh mãn tính: tim mạch, huyết áp, hô hấp, dạ dày…",
		],
	},
	{
		title: "3. Máu của tôi sẽ được làm những xét nghiệm gì?",
		content: [
			"- Tất cả những đơn vị máu thu được sẽ được kiểm tra nhóm máu (hệ ABO, hệ Rh), HIV, virus viêm gan B, virus viêm gan C, giang mai, sốt rét.",
			"- Bạn sẽ được thông báo kết quả, được giữ kín và được tư vấn (miễn phí) khi phát hiện ra các bệnh nhiễm trùng nói trên.",
		],
	},
	{
		title: "4. Máu gồm những thành phần và chức năng gì?",
		content: [
			"Máu là một chất lỏng lưu thông trong các mạch máu của cơ thể, gồm nhiều thành phần, mỗi thành phần làm nhiệm vụ khác nhau:",
			"- Hồng cầu làm nhiệm vụ chính là vận chuyển oxy.",
			"- Bạch cầu làm nhiệm vụ bảo vệ cơ thể.",
			"- Tiểu cầu tham gia vào quá trình đông cầm máu.",
			"- Huyết tương: gồm nhiều thành phần khác nhau: kháng thể, các yếu tố đông máu, các chất dinh dưỡng...",
		],
	},
	{
		title: "5. Tại sao lại có nhiều người cần phải được truyền máu?",
		content: [
			"Mỗi giờ có hàng trăm người bệnh cần phải được truyền máu vì:",
			"- Bị mất máu do chấn thương, tai nạn, thảm hoạ, xuất huyết tiêu hoá...",
			"- Do bị các bệnh gây thiếu máu, chảy máu: ung thư máu, suy tuỷ xương, máu khó đông...",
			"- Các phương pháp điều trị hiện đại cần truyền nhiều máu: phẫu thuật tim mạch, ghép tạng...",
		],
	},
	{
		title: "6. Nhu cầu máu điều trị ở nước ta hiện nay?",
		content: [
			"- Mỗi năm nước ta cần khoảng 1.800.000 đơn vị máu điều trị.",
			"- Máu cần cho điều trị hằng ngày, cho cấp cứu, cho dự phòng các thảm họa, tai nạn cần truyền máu với số lượng lớn.",
			"- Hiện tại chúng ta đã đáp ứng được khoảng 54% nhu cầu máu cho điều trị.",
		],
	},
	{
		title: "7. Tại sao khi tham gia hiến máu lại cần phải có giấy CMND?",
		content: [
			"- Mỗi đơn vị máu đều phải có hồ sơ, trong đó có các thông tin về người hiến máu. Theo quy định, đây là một thủ tục cần thiết trong quy trình hiến máu để đảm bảo tính xác thực thông tin về người hiến máu.",
		],
	},
	{
		title: "8. Hiến máu nhân đạo có hại đến sức khoẻ không?",
		content: [
			"Hiến máu theo hướng dẫn của thầy thuốc không có hại cho sức khỏe. Điều đó đã được chứng minh bằng các cơ sở khoa học và cơ sở thực tế.",
			"- Cơ sở khoa học: Máu có nhiều thành phần, mỗi thành phần chỉ có đời sống nhất định và luôn luôn được đổi mới hằng ngày. Ví dụ: Hồng cầu sống được 120 ngày, huyết tương thường xuyên được thay thế và đổi mới. Nếu mỗi lần hiến dưới 1/10 lượng máu trong cơ thể thì không có hại đến sức khỏe.",
			"- Nhiều công trình nghiên cứu đã chứng minh rằng, sau khi hiến máu, các chỉ số máu có thay đổi chút ít nhưng vẫn nằm trong giới hạn sinh lý bình thường không hề gây ảnh hưởng đến các hoạt động thường ngày của cơ thể.",
			"- Cơ sở thực tế: Thực tế đã có hàng triệu người hiến máu nhiều lần mà sức khỏe vẫn hoàn toàn tốt. Ở Việt Nam, người hiến máu nhiều lần nhất đã hiến gần 100 lần, sức khỏe hoàn toàn tốt.",
			"- Như vậy, mỗi người nếu thấy sức khoẻ tốt, không có các bệnh lây nhiễm qua đường truyền máu, đạt tiêu chuẩn hiến máu thì có thể hiến máu từ 3-4 lần trong một năm, vừa không ảnh hưởng xấu đến sức khoẻ của bản thân, vừa đảm bảo máu có chất lượng tốt, an toàn cho người bệnh.",
		],
	},
	{
		title: "9. Quyền lợi đối với người hiến máu tình nguyện?",
		content: [
      "Quyền lợi và chế độ đối với người hiến máu tình nguyện theo Thông tư số 05/2017/TT-BYT Quy định giá tối đa và chi phí phục vụ cho việc xác định giá một đơn vị máu toàn phần, chế phẩm máu đạt tiêu chuẩn:",
			"- Được khám và tư vấn sức khỏe miễn phí.",
			"- Được kiểm tra và thông báo kết quả các xét nghiệm máu (hoàn toàn bí mật): nhóm máu, HIV, virut viêm gan B, virut viêm gan C, giang mai, sốt rét. Trong trường hợp người hiến máu có nhiễm hoặc nghi ngờ các mầm bệnh này thì sẽ được Bác sỹ mời đến để tư vấn sức khỏe.",
			"- Được bồi dưỡng và chăm sóc theo các quy định hiện hành:",
			"+ Phục vụ ăn nhẹ tại chỗ: tương đương 30.000 đồng.",
			"+ Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.",
			"+ Lựa chọn nhận quà tặng bằng hiện vật có giá trị như sau:",
			"Một đơn vị máu thể tích 250 ml: 100.000 đồng.",
			"Một đơn vị máu thể tích 350 ml: 150.000 đồng.",
			"Một đơn vị máu thể tích 450 ml: 180.000 đồng.",
			"+ Được cấp giấy chứng nhận hiến máu tình nguyện của Ban chỉ đạo hiến máu nhân đạo Tỉnh, Thành phố. Ngoài giá trị về mặt tôn vinh, giấy chứng nhận hiến máu có giá trị bồi hoàn máu, số lượng máu được bồi hoàn lại tối đa bằng lượng máu người hiến máu đã hiến. Giấy Chứng nhận này có giá trị tại các bệnh viện, các cơ sở y tế công lập trên toàn quốc.",
		],
	},
	{
		title: "10. Khi hiến máu có thể bị nhiễm bệnh không?",
		content: [
			"- Kim dây lấy máu vô trùng, chỉ sử dụng một lần cho một người, vì vậy không thể lây bệnh cho người hiến máu.",
		],
	},
	{
		title: "11. Ngày mai tôi sẽ hiến máu, tôi nên chuẩn bị như thế nào?",
		content: [
			"- Tối nay bạn không nên thức quá khuya (ngủ trước 23:00).",
			"- Nên ăn và không uống rượu, bia trước khi hiến máu.",
			"- Mang giấy CMND, đủ giấy tờ tùy thân và thẻ hiến máu (nếu có) khi đi hiến máu.",
		],
	},
	{
		title: "12. Những trường hợp nào cần phải trì hoãn hiến máu?",
		content: [
			"- Những người phải trì hoãn hiến máu trong 12 tháng kể từ thời điểm:",
			"+ Phục hồi hoàn toàn sau các can thiệp ngoại khoa.",
			"+ Khỏi bệnh sau khi mắc một trong các bệnh sốt rét, giang mai, lao, uốn ván, viêm não, viêm màng não.",
			"+ Kết thúc đợt tiêm vắc xin phòng bệnh dại sau khi bị động vật cắn hoặc tiêm, truyền máu, chế phẩm máu và các chế phẩm sinh học nguồn gốc từ máu.",
			"+ Sinh con hoặc chấm dứt thai nghén.",
			"- Những người phải trì hoãn hiến máu trong 06 tháng kể từ thời điểm:",
			"+ Xăm trổ trên da.",
			"+ Bấm dái tai, bấm mũi, bấm rốn hoặc các vị trí khác của cơ thể.",
			"+ Phơi nhiễm với máu và dịch cơ thể từ người có nguy cơ hoặc đã nhiễm các bệnh lây truyền qua đường máu.",
			"+ Khỏi bệnh sau khi mắc một trong các bệnh thương hàn, nhiễm trùng huyết, bị rắn cắn, viêm tắc động mạch, viêm tắc tĩnh mạch, viêm tuỷ xương, viêm tụy.",
			"- Những người phải trì hoãn hiến máu trong 04 tuần kể từ thời điểm:",
			"+ Khỏi bệnh sau khi mắc một trong các bệnh viêm dạ dày ruột, viêm đường tiết niệu, viêm da nhiễm trùng, viêm phế quản, viêm phổi, sởi, ho gà, quai bị, sốt xuất huyết, kiết lỵ, rubella, tả, quai bị.",
			"+ Kết thúc đợt tiêm vắc xin phòng rubella, sởi, thương hàn, tả, quai bị, thủy đậu, BCG.",
			"- Những người phải trì hoãn hiến máu trong 07 ngày kể từ thời điểm:",
			"+ Khỏi bệnh sau khi mắc một trong các bệnh cúm, cảm lạnh, dị ứng mũi họng, viêm họng, đau nửa đầu Migraine.",
			"+ Tiêm các loại vắc xin, trừ các loại đã được quy định tại Điểm c Khoản 1 và Điểm b Khoản 3 Điều này.",
			"- Một số quy định liên quan đến nghề nghiệp và hoạt động đặc thù của người hiến máu: những người làm một số công việc và thực hiện các hoạt động đặc thù sau đây chỉ hiến máu trong ngày nghỉ hoặc chỉ được thực hiện các công việc, hoạt động này sau khi hiến máu tối thiểu 12 giờ:",
			"+ Người làm việc trên cao hoặc dưới độ sâu: phi công, lái cần cẩu, công nhân làm việc trên cao, người leo núi, thợ mỏ, thủy thủ, thợ lặn.",
			"+ Người vận hành các phương tiện giao thông công cộng: lái xe buýt, lái tàu hoả, lái tàu thuỷ.",
			"+ Các trường hợp khác: vận động viên chuyên nghiệp, người vận động nặng, tập luyện nặng.",
		],
	},
	{
		title: "13. Tôi có thể hiến máu sau khi tiêm vắc xin Covid-19 không?",
		content: [
			"- Khi tiêm vắc xin ngừa Covid-19, có thể tham gia hiến máu sau: 7 NGÀY, để đảm bảo bạn không bị tác dụng phụ và đảm bảo đủ sức khỏe vào ngày hiến máu.",
		],
	},
	{
		title: "14. Tôi bị nhiễm Covid-19. Tôi có thể hiến máu sau khi hồi phục không?",
		content: [
			"- Khi mắc bệnh Covid-19, có thể tham gia hiến máu sau: 14 ngày kể từ thời điểm có kết quả khẳng định 'ÂM TÍNH' với virus SarS-CoV-2.",
		],
	},
	{
		title: "15. Khi phát hiện bất thường, cảm thấy không an toàn với túi máu vừa hiến?",
		content: [
			"- Sau khi tham gia hiến máu, nếu phát hiện có bất cứ điều gì khiến bạn cảm thấy không an toàn với túi máu vừa hiến (chợt nhớ ra 1 hành vi nguy cơ, có sử dụng loại thuốc nào đó mà bạn quên báo bác sĩ khi thăm khám, có xét nghiệm 'DƯƠNG TÍNH' với SarS-CoV-2 bằng kỹ thuật test nhanh hoặc Real time RT-PCR,...) vui lòng báo lại cho đơn vị tiếp nhận túi máu nơi mà bạn đã tham gia hiến.",
		],
	},
	{
		title: "16. Cảm thấy không khỏe sau khi hiến máu?",
		content: [
			"- Sau khi hiến máu, nếu có các triệu chứng chóng mặt, mệt mỏi, buồn nôn,... hãy liên hệ ngay cho đơn vị tiếp nhận máu để được hỗ trợ về mặt y khoa.",
		],
	},
	{
		title: "17. Có dấu hiệu sưng, phù nơi vết chích?",
		content: [
			"- Sau khi hiến máu, nếu bạn có các dấu hiệu sưng, phù nơi vết chích. Xin đừng quá lo lắng, hãy chườm lạnh ngay vị trí sưng đó và theo dõi các dấu hiệu trên, nếu không giảm sau 24 giờ hãy liên hệ lại cho đơn vị tiếp nhận máu để được hỗ trợ.",
		],
	},
];

const HoiDap = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

	return (
		<>
			<div
				style={{
					padding: 32,
					maxWidth: 800,
					margin: "0 auto",
					borderRadius: 12,
					fontFamily: "Segoe UI, Arial, sans-serif",
				}}
			>
				<h2
					style={{
						color: "#21589F",
						fontWeight: 700,
						fontSize: 40,
						marginBottom: 32,
						marginTop: 0,
						textAlign: "center",
						letterSpacing: 1,
						textTransform: "uppercase",
					}}
				>
					Câu hỏi thường gặp về hiến máu
				</h2>

				{data.map((item, idx) => (
					<div
						key={idx}
						style={{
							border: "1.5px solid #b3d1f7",
							borderRadius: 12,
							background: "#fff",
							marginBottom: 20,
							boxShadow: "0 1px 6px rgba(33,88,159,0.04)",
							transition: "box-shadow 0.2s",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								cursor: "pointer",
								padding: "22px 28px",
							}}
							onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
						>
							<span
								style={{
									color: "#21589F",
									fontWeight: 600,
									fontSize: 22,
									letterSpacing: 0.5,
									textAlign: "left",
								}}
							>
								{item.title}
							</span>
							<span style={{ fontSize: 22, color: "#888" }}>
								{openIndex === idx ? "▲" : "▼"}
							</span>
						</div>
						<div
							style={{
								maxHeight: openIndex === idx ? 1000 : 0,
								overflow: "hidden",
								transition:
									"max-height 0.8s cubic-bezier(0.4,0,0.2,1), padding 0.8s cubic-bezier(0.4,0,0.2,1)",
								padding: openIndex === idx ? "16px 40px 18px 40px" : "0 40px",
								background: openIndex === idx ? "#f8fbff" : "#fff",
								textAlign: "left",
							}}
						>
							<ul
								style={{
									fontSize: 18,
									color: "#222",
									lineHeight: 1.7,
									margin: 0,
									opacity: openIndex === idx ? 1 : 0,
									transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
									paddingLeft: 0,
									listStyle: "none",
								}}
							>
								{item.content.map((c, i) => (
									<li key={i} style={{ marginBottom: 16 }}>
										{c}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			<LienHe />
		</>
	);
};

export default HoiDap;