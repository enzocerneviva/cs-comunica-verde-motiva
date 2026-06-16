import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { useOcorrencias } from '../context/OcorrenciasContext';
import { RootStackParamList } from '../navigation/AppNavigator';
import type { Ocorrencia } from '../types/ocorrencia';

type Props = NativeStackScreenProps<RootStackParamList, 'New'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7FA',
    },

    header: {
        backgroundColor: '#2E7D32',
        padding: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    headerTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '700',
    },

    headerSubtitle: {
        color: '#E8F5E9',
        marginTop: 4,
    },

    content: {
        padding: 16,
    },

    section: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 8,
    },

    input: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        padding: 14,
        fontSize: 15,
    },

    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },

    riskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },

    riskButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 4,
    },

    riskText: {
        fontWeight: '600',
    },

    saveButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    saveButtonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default function NewOccurrenceScreen({ navigation }: Props) {
    const { addOcorrencia } = useOcorrencias();

    const [local, setLocal] = useState('');
    const [descricao, setDescricao] = useState('');
    const [risco, setRisco] = useState<'baixo' | 'medio' | 'alto'>('medio');

    const onSubmit = () => {
        if (!local.trim() || !descricao.trim()) {
            Alert.alert(
                'Campos obrigatórios',
                'Preencha o local e a descrição.'
            );
            return;
        }

        const nova: Ocorrencia = {
            id: Date.now().toString(),
            local: local.trim(),
            data: new Date().toISOString(),
            risco,
            descricao: descricao.trim(),
            status: 'pendente',
            comentarios: [],
        };

        addOcorrencia(nova);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Nova Ocorrência
                </Text>

                <Text style={styles.headerSubtitle}>
                    Registre um problema identificado na rodovia
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.label}>📍 Local</Text>

                    <TextInput
                        style={styles.input}
                        value={local}
                        onChangeText={setLocal}
                        placeholder="Ex: BR-101 Km 120"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>📝 Descrição</Text>

                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                        placeholder="Descreva o problema encontrado..."
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>⚠️ Nível de Risco</Text>

                    <View style={styles.riskContainer}>
                        <Pressable
                            style={[
                                styles.riskButton,
                                {
                                    backgroundColor:
                                        risco === 'baixo'
                                            ? '#E8F5E9'
                                            : '#FFF',
                                    borderColor: '#4CAF50',
                                },
                            ]}
                            onPress={() => setRisco('baixo')}
                        >
                            <Text style={styles.riskText}>
                                Baixo
                            </Text>
                        </Pressable>

                        <Pressable
                            style={[
                                styles.riskButton,
                                {
                                    backgroundColor:
                                        risco === 'medio'
                                            ? '#FFF3E0'
                                            : '#FFF',
                                    borderColor: '#FF9800',
                                },
                            ]}
                            onPress={() => setRisco('medio')}
                        >
                            <Text style={styles.riskText}>
                                Médio
                            </Text>
                        </Pressable>

                        <Pressable
                            style={[
                                styles.riskButton,
                                {
                                    backgroundColor:
                                        risco === 'alto'
                                            ? '#FFEBEE'
                                            : '#FFF',
                                    borderColor: '#F44336',
                                },
                            ]}
                            onPress={() => setRisco('alto')}
                        >
                            <Text style={styles.riskText}>
                                Alto
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <Pressable
                    style={styles.saveButton}
                    onPress={onSubmit}
                >
                    <Text style={styles.saveButtonText}>
                        Salvar Ocorrência
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}