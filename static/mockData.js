const mockFeedback = [
    {
        username: 'Tran Ha Nam',
        title: 'Cũng được',
        point: 7
    },
    {
        username: 'Tran Ha Nam',
        title: 'Còn phải cải thiện nhiều',
        point: 8
    },
    {
        username: 'Tran Ha Nam',
        title: 'Cũng được',
        point: 7
    },
    {
        username: 'Tran Ha Nam',
        title: 'Còn phải cải thiện nhiều',
        point: 8
    },
    {
        username: 'Tran Ha Nam',
        title: 'Cũng được',
        point: 7
    },
    {
        username: 'Tran Ha Nam',
        title: 'Còn phải cải thiện nhiều',
        point: 8
    }
]
const mockChart = [
    {
        date:"30/4/2021",
        totalViews: 33,
        totalPosts: 32,
        totalComments: 2
    },
    {
        date:"1/5/2021",
        totalViews: 22,
        totalPosts: 11,
        totalComments: 23
    },
    {
        date:"2/5/2021",
        totalViews: 41,
        totalPosts: 16,
        totalComments: 3
    },
    {
        date:"3/5/2021",
        totalViews: 13,
        totalPosts: 33,
        totalComments: 1
    },
    {
        date:"4/5/2021",
        totalViews: 29,
        totalPosts: 16,
        totalComments: 8
    }
]
const mockReport = [
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
    {
        username: 'Tran Ha Nam',
        title: 'Bài viết chống phá UTE',
        reportType: 'Quấy rối'
    },
]
const mockPermissions = [
    {
        parent: "Cấu hình site",
        children: [
          {
              type: "Website",
              group: "Cấu hình site",
              name: "Cấu hình danh mục",
              value: ["category.get", "category.update"]
          },
        ]
    },
    {
        parent: "Nội dung web",
        children: [
          {
              type: "Website",
              group: "Nội dung web",
              name: "Quản lý bài viết",
              value: ["post.create", "post.get", "post.update", "post.delete"]
          },
          {
              type: "Website",
              group: "Nội dung web",
              name: "Quản lý bình luận",
              value: ["comment.get"]
          },
        ]
    },
    {
        parent: "Lịch dạy",
        type: "Website",
        group: "calendar",
        name: "Lịch dạy",
        value: ["calendar.get", "calendar.update", "calendar.delete", "calendar.create"],
        children: []
    },
    {
        parent: "Feedback",
        type: "Website",
        group: "Feedback",
        name: "Feedback",
        value: ["feedback.get"],
        children: []
    },
    {
        parent: "Media",
        type: "Website",
        group: "Media",
        name: "Media",
        value: ["media.get"],
        children: []
    }
]
export default { mockFeedback, mockChart, mockReport, mockPermissions }
