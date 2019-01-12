package com.ztai.spring.boot.ztai;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Post {

    private long id;
    private String title;
    private String url;
    private String content;

}
