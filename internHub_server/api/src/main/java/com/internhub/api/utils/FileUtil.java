package com.internhub.api.utils;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Component
public class FileUtil {
    public String saveFile(MultipartFile file, String directory) {
        if (file.isEmpty()) {
            return null;
        }
        try {
            UUID uuid = UUID.randomUUID();
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String extension = fileName.substring(fileName.lastIndexOf(".") + 1);
            fileName = uuid.toString() + "." + extension;
            Path filePath = Paths.get("files", fileName);
            Files.createDirectories(filePath.getParent());
            Files.copy(file.getInputStream(), filePath);
            return fileName;
        } catch (IOException e) {
            System.out.println(e);
            return null;
        }
    }
    public byte[] getFileContent(String fileName) {
        Path filePath = Paths.get(fileName);
        try {
            return Files.readAllBytes(filePath);
        } catch (IOException e) {
            return null;
        }
    }
}
